const bcrypt = require("bcryptjs")
const mongoose = require("mongoose");



const User = mongoose.model(
  "User",
  new mongoose.Schema({
  
    name:{
      type: String,
      trim: true,
      required: "Name is required"

    },

    email:{
      type: String, 
      trim: true,
      unique: true,
      required: "Email is required"

    },


    password:{
      type: String, 
      trim: true,
      unique: false,
      min: 6,
      max: 50,
      required: "Password is required"

    }




  },{timestamps: true})
);


userSchema.pre("save",function(next){
  


  if(User.isModified('password')){

    return bcrypt.hash(user.password,12,function(error,hash){

      if(error){
        console.log("THere was a problem with the hasing",error)
      return next();}
      user.password=hash;
      return next();





    })
  } else {
  return next();}




})
export default User;


