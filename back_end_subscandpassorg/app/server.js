const express = require ('express');
const cors = require ('cors');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(express.json());


import User from './model/user';



mongoose.connect("mongodb://localhost:27017/subscandpassorg")
.then(()=>{
  console.log("DB connected")
}).catch((error)=>{
  console.log("DB connection error",error)
})








app.get("/", (req, res) => {
  res.json({ message: "Welcome to backend application!!!." });
});


app.post("/register", async (req, res) => {
  console.log("in the app.post",req.body)

  const {name,email,password} = req.body;
  if(!name) return res.status(400).send("name is required ");
  if(!password && password.length<6) return res.status(400).send("password is required and 6 characters minimum ");
  if(!name) return res.status(400).send("name is required ");

  const userExist =  await User.findOne({email}).exec();
  if(userExist) return res.status(400).send("A user exists with the same password");


   let user = new User(req.body)

    try {
      
      await user.save();
      console.log("user created ",user)
    } catch (error) { 
      console.log("there was an error with the creation of the user",error)
    }
  






});



const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});