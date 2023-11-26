import mongoose from "mongoose";

const RecruiterData = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
})