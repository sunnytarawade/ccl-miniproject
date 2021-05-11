import React from 'react'

function Login({authState,setAuthState,handleLogin, handleInputChange, handleSubmit}) {
   
   
    return (
        <>
        <h1>Login</h1>
       <form onSubmit={(e)=>{e.preventDefault();console.log('submit'); handleSubmit((handleLogin))}}>
           <label>userName : <input name="userName" type="text" onChange={handleInputChange}/></label>
           <label>userPassword : <input name="userPassword" type="password" onChange={handleInputChange}/></label>
           <input type="submit" value="submit"/>
       </form>
       <h6 onClick={()=>setAuthState({
        page: 'signup',
        userName:'',
        userPassword:'',
    })}>Sign Up Instead</h6>
        {authState.error ? <p style={{color:'red'}}>Wrong credentials</p>:null}
       </>
    )
}

export default Login
