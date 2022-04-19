import React, { Component, useState } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux';




const SignIn = () =>{



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch=useDispatch();


   const handleSubmit = async (e)=>{  
     e.preventDefault();
     console.log('h1111111');
    //  console.table(this.state);
     const user ={email,password};
    

      try {
        await axios.post(`http://localhost:9999/login`, {user})
        .then(res=>{
          
          // console.info('THESE ARE THE RESPONSE DATA',res.data);
          
          console.log('HELLLLLLOOOO');
          if(res.data){ 
            window.localStorage.setItem('auth', JSON.stringify(res.data));
            console.log('res.data111111',res.data);

           dispatch({

            // console.log('inside the dispatch',payload);
              type: "LOGGED_IN_USER",
              payload: res.data
            })  

            // history.push("/about");

          }
          
          
          
        })
        
      } catch (error) {
        console.log(error)
      }
      
    }


  return(
      <>
      <form onSubmit={handleSubmit} >

      

          <div className='form-group mb-3'>
            <label className='form-label'> Your email</label>          
              <input type="email"
                className='form-control'
                placeholder='enter email'
               value={email}
              onChange={(e)=>{setEmail(e.target.value)}}></input>
          </div>  


          <div className='form-group mb-3'>
            <label className='form-label'> Your password</label>          
              <input type="password"
                className='form-control'
                placeholder='enter password'
               value={password}      
                onChange={(e)=>{setPassword(e.target.value)}}></input>
          </div>  

          <button type='submit'>Sign Up</button>
      </form>
  


</>


  )


}


export default SignIn;




