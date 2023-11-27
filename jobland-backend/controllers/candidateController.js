import User from "../models/user.js";
import Candidate from "../models/candidate.js";
import dotevn from "dotenv"
dotevn.config();

export const createCandidateProfile = async (req , res)=>{
    try {
        const { name,country,dateOfBirth,fieldOfStudy,linkedinProfile,personalWebsite,gender,graduationYear,institution,email, phoneNumber } = req.body;
        const { originalname, buffer, mimetype } = req.file || {}; // Destructure file properties safely
        
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