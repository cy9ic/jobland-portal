import User from "./../models/user.js"
import bcrypt from "bcrypt"

export const registerUser = async (req , res)=>{
    const {email , password ,role} = req.body;
        
    try{
        const existingUser = await User.findOne({ email});
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ userEmail:email, password: hashedPassword,role:role ,verified:false});
        await newUser.save();
        return res.status(201).json({ message: 'User registered successfully' });

    }catch(error){}
    return res.status(500).json({ message: 'Failed to register user', error: error.message });

}


export const login = async (req , res)=>{
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        return res.status(500).json({ message: 'Login failed', error: error.message });
    }

}

