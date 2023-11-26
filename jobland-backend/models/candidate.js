import mongoose from "mongoose";

const CandidateSchema = mongoose.Schema({
    CandidateName:{
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
        required:true
    },
    country:{
        type:String , 
        required:true
    },
    JobTitle:{
        type:String,
        required:true
    }
    ,
    dateOfBirth: {
        type:Date,
        required:true
    },
    Gender : {
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
        fieldOfStudy:String,
        institution:String,
        GraduationYear:String
    },
    personalWebsite:{
        type:String,
        default:""
    }
    
});
const Candidate = new mongoose.model("Candidate",CandidateSchema);
export default Candidate;