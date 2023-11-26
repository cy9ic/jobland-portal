import express from "express";
import cors from "cors"
import bodyParser from "body-parser"
import db from "./db-config/config.js"
const app  = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/',(req , res)=>{
    res.send("The server is working.");
})

app.listen(3001,"localhost",()=>{console.log("server is working")});