import React, { useState } from 'react'



const NewUserNameAndPassword = () =>{

    const [details,setDetails]=useState({
        nameOfWebSite:"",
        userNameOfWebSite:"",
        passwordOfWebsite:""
    })

    const {nameOfWebSite,userNameOfWebSite,passwordOfWebsite} = details;

    const handleSubmit=(e)=>{
        // do the submit stuff
        e.preventDefault();


      }


    const NewUserNameAndPasswordForm = () =>{

        return(

              <div className='container'>
            <form onSubmit={handleSubmit}>

                    <div className='form-group'>
            <label className='form-label'> Name of the Website</label>          
              <input type="name"
                className='form-control'
                placeholder='Enter the name of the website'
                value={nameOfWebSite}
                onChange={(e)=>setDetails(e.target.value)}></input>
          </div>  

          <div className='form-group'>
            <label className='form-label'> Username of the Website</label>          
              <input type="text"
                className='form-control'
                placeholder='enter username'
                value={userNameOfWebSite}
              onChange={(e)=>setDetails(e.target.value)}></input>
          </div>  


          <div className='form-group'>
            <label className='form-label'>Password of the website</label>          
              <input type="text"
                className='form-control'
                placeholder='enter password'
                value={passwordOfWebsite}
                onChange={(e)=>(setDetails(e.target.value))}></input>
          </div>  
          <button type='submit'>Upload</button>

            </form>
          </div>
        )
    }




    return(
            <>        
            <div className='col-sm'></div>
            <div className='col-sm'>
              <div className='container-fluid bg-light p-5 text-center'>
                {/* {JSON.stringify(details)}                 */}
              {NewUserNameAndPasswordForm()}       
              Post a new username and password !!!
              </div>
            </div>          
            <div className='col-sm'></div>
        </>

    )
}


export default NewUserNameAndPassword;