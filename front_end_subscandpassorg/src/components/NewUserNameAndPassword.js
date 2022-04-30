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
    }


    const NewUserNameAndPasswordForm = () =>{

        return(

            <form onSubmit={handleSubmit}>

                    <div className='form-group mb-3 x-5'>
            <label className='form-label'> Name of the Website</label>          
              <input type="name"
                className='form-control'
                placeholder='Enter the name of the website'
                value={nameOfWebSite}
                onChange={(e)=>setDetails(e.target.value)}></input>
          </div>  

          <div className='form-group mb-3 '>
            <label className='form-label'> Username of the Website</label>          
              <input type="text"
                className='form-control'
                placeholder='enter username'
                value={userNameOfWebSite}
              onChange={(e)=>setDetails(e.target.value)}></input>
          </div>  


          <div className='form-group mb-3 '>
            <label className='form-label'>Password of the website</label>          
              <input type="text"
                className='form-control'
                placeholder='enter password'
                value={passwordOfWebsite}
                onChange={(e)=>(setDetails(e.target.value))}></input>
          </div>  
            </form>
        )
    }




    return(
            <>        
            <div>
            {NewUserNameAndPasswordForm()}       
            Post a new username and password !!!
        </div>
        </>

    )
}


export default NewUserNameAndPassword;