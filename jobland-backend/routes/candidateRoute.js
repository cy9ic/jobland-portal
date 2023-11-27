import express from "express"    
import { createCandidateProfile, getCandidate } from "../controllers/candidateController.js";
const candidateRoute = express.Router();

import multer from 'multer';

const storage = multer.memoryStorage();

// Accept only PDF files
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('File type not supported. Please upload a PDF file.'));
    }
  },
});


candidateRoute.get('/getProfile',getCandidate);
candidateRoute.post('/createProfile' ,upload.single('resume'),createCandidateProfile);
export {candidateRoute};

