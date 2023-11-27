import User from "../models/user.js";
import Recruiter from "../models/recruiter.js"
import Jobs from "../models/jobs.js"
import dotevn from "dotenv"
import jwt from "jsonwebtoken";
dotevn.config();

import multer from "multer"
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, 
  },
});


export const createRecruiterProfile = async(req , res)=>{
    try {
        const { name,email, company, phoneNumber, position } = req.body;
        const { originalname, buffer, mimetype } = req.file || {}; // Destructure file properties safely
        // const { companyLogo } = req.file;
        
    if (!buffer || !mimetype) {
        return res.status(400).json({ message: 'File data not found or mimetype missing' });
      }
      
  await User.updateOne({userEmail:email},{$set:{verified:true}});

        const newRecruiter = new Recruiter({
            name: name,
            email: email,
            company: company,
            phoneNumber: phoneNumber,
            position: position,
            companyLogo: {
                data: buffer, // Binary image data
                contentType: mimetype // Content type of the uploaded image
            }

        });

        const savedRecruiter = await newRecruiter.save();

        res.status(201).json({ message: 'Recruiter profile created successfully', recruiter: savedRecruiter });


    } catch (error) {
        res.status(500).json({ message: 'Failed to create recruiter profile', error: error.message });
    
    }
}

export const getProfile = async (req, res) => {
    try {
      const { email } = req.query; 
  
      const recruiter = await Recruiter.findOne({ email: email });
  
      if (!recruiter) {
        return res.status(404).json({ message: "Recruiter not found", email: email });
      }
  
      const token = jwt.sign({
        id: recruiter._id,
        email: recruiter.email,
      }, process.env.SECRET_KEY, { expiresIn: "2h" });
  
      const userResponse = {
        name: recruiter.name,
        company: recruiter.company,
        phoneNumber: recruiter.phoneNumber,
        email: recruiter.email,
        position: recruiter.position,
        token: token
      };
  
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true
      };
  
      res.cookie("token", token, options);
      return res.status(200).json({ message: "Recruiter Profile Found!", token: userResponse });
    } catch (error) {
        console.error("Error:", error); // Log the error for detailed information
        return res.status(500).json({ message: "Internal server error", error: error });
      }
  };

export const createJob = async(req , res)=>{
    try {
        
        const job = req.body;
        const newJob = new Jobs({
            jobTitle:job.title,
            JobDescription:job.JobDescription,
            CategoryOfJob:job.CategoryOfJob,
            JobTitle:job.JobTitle,
            company:job.company,
            postedBy:job.postedBy,
            lowerEndcost:job.lowerEndcost,
            higherEndCost:job.higherEndCost
        });
        const createJob = await newJob.save();

        res.status(201).json({message:"New Job posted successfully",job:createJob});
    } catch (error) {
        res.status(500).json({message:"Failed to create a job posting" , error:error.message});
    }
}