import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv"
dotenv.config();

mongoose.connect(process.env.DB_URL)
.then(console.log("Database is connected")).catch((err)=>{console.log(err)});

const  db = mongoose.connection;
export  default db;