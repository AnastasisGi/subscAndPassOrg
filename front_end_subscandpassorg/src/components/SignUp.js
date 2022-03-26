import React, { Component } from 'react'
import axios from 'axios'


export default class SignUp extends Component {

   constructor(props) {
        super(props);
        this.state = {
            email: "",
            password:""
        };


  }

    handleChangeEmail =(event)=>{
      this.setState({
        emai:event.target.value
      })
    }

    handlechangePassword =(event)=>{
      this.setState({
      password:event.target.value
    })
    }

   

   handleSubmit = async (e)=>{
      e.preventDefault();
      const user ={
        email: this.state.email,
        password: this.state.password
      };
      // console.table(this.state)

    await axios.post(`http://localhost:9999/register`, {user})
      .then(res=>{
        console.log(res);
        console.log(res.data);
      })

   }

 
 
  render() {
    return (
    

<>
      <form onSubmit={this.handleSubmit} >

        <div className='form-group mb-3'>
          <label className='form-label'> Your email</label>          
          <input type="email"
          className='form-control'
          placeholder='enter email'
        
          onChange={this.handleChangeEmail}></input>
          </div>  


          <div className='form-group mb-3'>
          <label className='form-label'> Your password</label>          
          <input type="password"
          className='form-control'
          placeholder='enter password'
  
          onChange={this.handlechangePassword}></input>
          </div>  

          <button type='submit'>Submit</button>
      </form>
  


</>
      
    )
  }
}
