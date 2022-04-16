import bcrypt from 'bcrypt';

import mongoose from 'mongoose';
import {Schema} from 'mongoose';



const userSchema = new Schema({

 name:{
      type: String,
      trim: true,
      required: true

    },

    email:{
      type: String, 
      trim: true,
      unique: true,
      required: true

    },


    password:{
      type: String, 
      trim: true,
      unique: false,
      min: 6,
      max: 50,
      required: true

    }





},{timestamps:true})


userSchema.pre("save",function(next){
  

  let user = this


  // console.log('insdide the schema ---------------------------------', user);
  // console.log('user passwordgggggggggggggggg', user.password);

  if(user.isModified('password')){

    return bcrypt.hash(user.password,12,function(error,hash){
      if(error){
        // console.log("THere was a problem with the hasing2222222222222222222",error)
        return next();}
        user.password=hash;
        console.log('hasssiiiing ',user.password);
      return next();
    })
  } else {
  return next();}
})



userSchema.methods.comparePassword = function(password,cb){
  bcrypt.compare(password, this.password,function(error,isMatch){

    if(error){
      console.log('there is an error in comparing passwords',error);
      return cb(error,false);
    }
    console.log('PASSWORD MATCHED ',isMatch);
    return cb(null,isMatch);

  })
}


export default mongoose.model("User", userSchema);