import User from "../models/user.js";
import Candidate from "../models/candidate.js";
import dotevn from "dotenv"
import jwt from "jsonwebtoken"
dotevn.config();

export const createCandidateProfile = async (req , res)=>{
    try {
        const { name,country,dateOfBirth,fieldOfStudy,linkedinProfile,personalWebsite,gender,graduationYear,institution,email, phoneNumber } = req.body;
        const { originalname, buffer, mimetype } = req.file || {}; 
    if (!buffer || !mimetype || mimetype!=="application/pdf") {
        return res.status(400).json({ message: 'File data not found or mimetype missing' });
      }
      
  await User.updateOne({userEmail:email},{$set:{verified:true}});

        const CandProfile= new Candidate({
            name: name,
            country:country,
            fieldOfStudy:fieldOfStudy,
            phoneNumber: phoneNumber,
            linkedinProfile:linkedinProfile,
            personalWebsite:personalWebsite,
            gender:gender,
            education:{
                fieldOfStudy:fieldOfStudy,
                institution:institution,
                graduationYear:graduationYear
            },dateOfBirth:dateOfBirth,
            email:email,
            resume: {
                data: buffer, // Binary image data
                contentType: mimetype // Content type of the uploaded image
            }

        });

        const candidateProfile = await CandProfile.save();

        res.status(201).json({ message: 'Candidate profile created successfully', candidate: candidateProfile });


    } catch (error) {
        res.status(500).json({ message: 'Failed to create recruiter profile', error: error.message });
    
    }
}


export const getCandidate =async (req, res)=>{
    
    
    try{

        const {email} = req.query;
        
        const candidate = await Candidate.findOne({email:email});
        
        
        if(!candidate){
            return res.status(400).json({message:"Canidate Not found",email:email});
        }


        const token = jwt.sign({
            id:candidate._id,email,
        },process.env.SECRET_KEY,{expiresIn:"2h"});

        const userresponse = {
            education:candidate.education,
            name:candidate.name,
            dateOfBirth:candidate.dateOfBirth,
            phoneNumber:candidate.phoneNumber,
            linkedinProfile:candidate.linkedinProfile,
            personalWebsite:candidate.personalWebsite,
            email:candidate.email,
            country:candidate.country,
            token:token
        }
        const options = {
            expires:new Date(Date.now()+3*24*60*60*1000),
            httpOnly:true
        }
        res.cookie("token", token, options);
        return res.status(200).json({message:"Canidate Profile Found!", token:userresponse});
        
    }catch(err){
        return res.status(500).json({message:"Internal server error" , error:err});
    }
}