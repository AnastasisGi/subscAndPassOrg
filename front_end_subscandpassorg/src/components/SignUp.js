import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';




const SignUp = () =>{


  const navigate=useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


   const handleSubmit = async (e)=>{
      e.preventDefault();
      const user = {name,password,email};


      try {
        await axios.post(`http://localhost:9999/register`, {user})
        .then(res=>{

          console.log('inside the axios', user);
            console.log(res);
            console.log(res.data);

          })
        
      } catch (error) {
          console.log(error)
      }

   }



  return(



<>
      <form onSubmit={handleSubmit} >

          <div className='form-group mb-3'>
            <label className='form-label'> Your name</label>          
              <input type="name"
                className='form-control'
                placeholder='enter name'
                value={name}
                onChange={(e)=>setName(e.target.value)}></input>
          </div>  

          <div className='form-group mb-3'>
            <label className='form-label'> Your email</label>          
              <input type="email"
                className='form-control'
                placeholder='enter email'
                value={email}
              onChange={(e)=>setEmail(e.target.value)}></input>
          </div>  


          <div className='form-group mb-3'>
            <label className='form-label'> Your password</label>          
              <input type="password"
                className='form-control'
                placeholder='enter password'
                value={password}
                onChange={(e)=>(setPassword(e.target.value))}></input>
          </div>  

          <button type='submit'>Sign Up</button>
      </form>
  


</>
  )
}

export default SignUp;



