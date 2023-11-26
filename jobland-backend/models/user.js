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
    }
  });

  const User = mongoose.model("User",userSchema);
  export default User;