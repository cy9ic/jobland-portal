import mongoose from "mongoose";

const RecruiterDataSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    }
    ,
    position:{
        type:String,
        required:true
    },
    companyLogo: {
        data: Buffer,
        contentType: String
    }

    
});

const Recruiter = mongoose.model('Recruiter', RecruiterDataSchema);

export default Recruiter;