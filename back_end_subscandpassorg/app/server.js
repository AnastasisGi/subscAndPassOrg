  

const dotenv = require('dotenv');
dotenv.config();
import jwt from 'jsonwebtoken'; 

const thekey=process.env.ACCESS_TOKEN_SECRET;
const express = require ('express');
const cors = require ('cors');
const app = express();
const mongoose = require('mongoose');
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












// LOGIN 
app.post("/login", async (req, res) => {
  
    const email = req.body.user.email;
    const password=req.body.user.password;
  
  
  let user = await User.findOne({email}).exec();

  try {
    
    if(!user) res.status(400).send("user with that email not found");

      else {
        user.comparePassword(password,(error,isMatch)=>{
          console.log('is a match',isMatch);
        if(!isMatch || error) return res.status(400).send("the password is not matched");

          else{

            const token = jwt.sign({_id:user._id.toString()}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "10h"
          });
            res.json({token,user:{
            name:user.name,
            email:user.email,
            upDatedAt:user.upDatedAt,
            _id:user._id
            }});



          }


         

      });
      }

  } catch (error) {
    console.log('login error',error);
    res.status(400).send("Sign in failed");

  }



  
})


app.get("/", (req, res) => {
  res.json({ message: "Welcome to backend application!!!." });
});



// SIGN UP
app.post("/register", async (req, res) => {
  console.log("in the app.post for the register",req.body)
res.json({ msg: 'success' });
  const name = req.body.user.name;
  const email = req.body.user.email;
  const password=req.body.user.password;
  const userExist =  await User.findOne({email}).exec();
  if(userExist) return res.status(400).send("A user exists with the same password");


   let user = new User({name,email,password})

    try {
      
      await user.save();
      console.log("user created ",user)
    } catch (error) { 
      console.log('user not created',error);
      }

});


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});