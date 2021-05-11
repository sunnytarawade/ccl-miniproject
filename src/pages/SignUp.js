import React from 'react'

function SignUp({authState,setAuthState,handleSignUp, handleInputChange, handleSubmit}) {
   
   
    return (
        <>
        <h1>SignUp</h1>
       <form onSubmit={(e)=>{e.preventDefault();console.log('submit'); handleSubmit((handleSignUp))}}>
           <label>userName : <input name="userName" type="text" onChange={handleInputChange}/></label>
           <label>userPassword : <input name="userPassword" type="password" onChange={handleInputChange}/></label>
           <input type="submit" value="submit"/>
       </form>
       <h6 onClick={()=>setAuthState({
        page: 'login',
        userName:'',
        userPassword:'',
    })}>Login Instead</h6>
      {authState.error ? <p style={{color:'red'}}>Wrong credentials</p>:null}
      
       </>
    )
}

export default SignUp
