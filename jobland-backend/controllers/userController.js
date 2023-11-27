import User from "./../models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotevn from "dotenv"

dotevn.config();

export const registerUser = async (req , res)=>{
    const {email , password ,role} = req.body;
        
    try{
        const existingUser = await User.findOne({userEmail: email});
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ userEmail:email, password: hashedPassword,role:role ,verified:false});
        await newUser.save();

        const token = jwt.sign(
            {id:newUser._id , email},
            process.env.SECRET_KEY,
            {
                expiresIn:"2h"
            }
            );
            

        const userResponse = {
            _id: newUser._id,
            userEmail: newUser.userEmail,
            role: newUser.role,
            verified: newUser.verified,
            token: token
        };

        return res.status(201).json({message:"Succesfully registered!" , token:userResponse})

   

    }catch(error){
        return res.status(500).json({ message: 'Failed to register user', error: error.message });
    }
    

}


export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({userEmail:email});        

        if (!user) {
            // Respond with a generic error message to avoid revealing user existence
            return res.status(401).json({ message: 'User Not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            // Respond with a generic error message to avoid revealing authentication status
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            {id:user._id , email},
            process.env.SECRET_KEY,
            {
                expiresIn:"2h"
            }
        )
        const userResponse = {
            _id: user._id,
            userEmail: user.userEmail,
            role: user.role,
            verified: user.verified
        };

        const options = {
            expires:new Date(Date.now()+3*24*60*60*1000),
            httpOnly:true
        }
        res.cookie("token", token, options);
        return res.status(200).json({ message: 'Login successful', user: userResponse });

    } catch (error) {
        return res.status(500).json({ message: 'Login failed', error: error });
    }
};