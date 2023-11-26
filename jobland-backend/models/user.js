import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userEmail: {
      type: String,
      required: true,
      unique: true 
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['recruiter', 'candidate'], 
      default: 'user'
    },
    verified : {
      type:Boolean,
      default:false
    }

  });

  const User = mongoose.model("User",userSchema);
  export default User;