import express from "express"
import { createRecruiterProfile, getProfile } from "../controllers/recruiterController.js";
import multer from "multer"
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5, // Limit file size to 5MB (adjust as needed)
    },
});
const recruiterRoute = express.Router();

recruiterRoute.post('/createProfile' ,upload.single('companyLogo') ,createRecruiterProfile);
recruiterRoute.get('/getProfile',getProfile);
export { recruiterRoute};