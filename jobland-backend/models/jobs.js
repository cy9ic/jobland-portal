import mongoose, { Mongoose, mongo } from "mongoose";

const JobSchema = mongoose.Schema({
    
    jobTitle:{
        type:String,
        required:true
    },
    JobDescription:{
        type:String,
        required:true
    },
    CategoryOfJob:{
        type:String,
        required:true
    },
      company:{
        type:String,
        required:true
    },
    postedBy:{
        type:String,
        required:true
    },
    lowerEndcost:{
        type:String,
        required:true
    }
    ,
    higherEndCost:{
        type:String,
        required:true
    }

});

const Jobs = new mongoose.model("Jobs" , JobSchema);
export default Jobs;