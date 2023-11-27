import mongoose from "mongoose";

const CandidateSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    resume: {
        data: Buffer, 
        contentType: String ,
    },
    country:{
        type:String , 
        required:true
    },
   
    
    dateOfBirth: {
        type:Date,
        required:true
    },
    gender : {
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    linkedinProfile:{
        type:String,
        required:true
    }
    ,
    education:{
        fieldOfStudy:{type:String},
         institution: { type: String },
        graduationYear: { type: String }
    },
    personalWebsite:{
        type:String,
        default:"sa"
    }
    
});
const Candidate = new mongoose.model("Candidate",CandidateSchema);
export default Candidate;