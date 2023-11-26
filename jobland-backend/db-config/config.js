import mongoose, { mongo } from "mongoose";

mongoose.connect("mongodb+srv://harkaran0010:bVBORTSMON05kaU4@cluster0.yntzqcg.mongodb.net/?retryWrites=true&w=majority")
.then(console.log("Database is connected")).catch((err)=>{console.log(err)});

const  db = mongoose.connection;
export  default db;