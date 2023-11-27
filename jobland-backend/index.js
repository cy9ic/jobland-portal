import express from "express";
import cors from "cors"
import bodyParser from "body-parser"
import db from "./db-config/config.js"
import multer from "multer";
import cookieParser from "cookie-parser";

const app  = express();

import {userRouter } from "./routes/userRoute.js";
import {recruiterRoute} from "./routes/recruitedRoute.js";
import { candidateRoute } from "./routes/candidateRoute.js";

//middleware

app.use(cors());
app.use(bodyParser.json());
// Multer storage configuration

const storage = multer.memoryStorage(); // Using memory storage for storing files temporarily

// Multer configuration
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5, // Limit file size to 5MB (adjust as needed)
    },
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype === 'application/pdf' ||
            (file.mimetype.startsWith('image/') && file.mimetype !== 'image/svg+xml')
        ) {
            cb(null, true);
        } else {
            cb(new Error('Only images are allowed!'), false);
        }
    },
});
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
      res.status(400).json({ message: 'Multer error', error: err.message });
    } else {
      next(err);
    }
  });

app.use(cookieParser());
app.use('/recruiter',recruiterRoute);
app.use('/candidate',candidateRoute);
app.use('/user',userRouter);

app.get('/',(req , res)=>{
    res.send("The server is working.");
})

app.listen(3001,"",()=>{console.log("server is working")});