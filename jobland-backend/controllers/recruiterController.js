import User from "../models/user.js";
import Recruiter from "../models/recruiter.js"
import Jobs from "../models/jobs.js"
import dotevn from "dotenv"
dotevn.config();
import multer from "multer"
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // Limit file size to 5MB (adjust as needed)
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