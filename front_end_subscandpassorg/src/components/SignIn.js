import React, { Component } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux';
// import {usehistory} from 'react-router-dom';

export default class SignIn extends Component {



//  history = usehistory();

  constructor(props) {
     
        super(props);
        this.state = {
            email: "",
            password:""
        };

        
      }

      
         

      
      
      handleChangeEmail =(event)=>{
        this.setState({
        email:event.target.value
      })
    }

    handlechangePassword =(event)=>{
      this.setState({
      password:event.target.value
    })
    }




   handleSubmit = async (e)=>{  
     e.preventDefault();
     console.log('h1111111');
     console.table(this.state);
     const user ={
       email: this.state.email,
        password: this.state.password
        
      };
    
let dispatch;
      try {
        await axios.post(`http://localhost:9999/login`, {user})
        .then(res=>{
          
          // console.info('THESE ARE THE RESPONSE DATA',res.data);
          
          console.log('HELLLLLLOOOO');
          if(res.data){ 
            window.localStorage.setItem('auth', JSON.stringify(res.data));
            console.log('res.data111111',res.data);
         dispatch=useDispatch();

           dispatch({

            // console.log('inside the dispatch',payload);
              type: "LOGGED_IN_USER",
              payload: res.data
            })  

            history.push("/about");

          }
          
          
          
        })
        
      } catch (error) {
        console.log(error)
      }
      
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

          <button type='submit'>Sign Up</button>
      </form>
  


</>
      
    )
  }
}

