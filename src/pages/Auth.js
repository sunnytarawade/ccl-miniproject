import {addUser,getUser} from '../apiGateways';
import Login from './Login';
import SignUp from './SignUp';
import React,{useState} from 'react'
import {StyledButton} from '../styledComponents';
import { Redirect } from 'react-router';
function Auth({appState,setAppState}) {
    
    const [authState, setAuthState] = useState({
        page: 'login',
        userName:'',
        userPassword:'',
        error:false,
    })

    const postConfig = (postBody)=>({
        method:'POST',
        mode:'cors',
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({body:postBody}),

    })

    const handleInputChange = (e)=>{
        setAuthState({ 
            ...authState,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = (callback)=>{console.log('cb');callback()};
    
    const handleLogin = async ()=>{
        try{
        const res = await fetch(getUser,postConfig({userName:authState.userName,userPassword:authState.userPassword}));
        const {body} = await res.json();
        const parsedBody = JSON.parse(body);
        console.log(parsedBody);
        
        if(parsedBody.authorizeLogin){  
            setAuthState({error:false});
        
            setAppState({shouldLogin: true})}
        else{
            setAuthState({error:true});
        }}
        catch(err){
            setAuthState({error:true});
        
            console.log(err);
        }
    }

    const handleSignUp = async ()=>{
        try{
            const res = await fetch(addUser,postConfig({userName:authState.userName,userPassword:authState.userPassword}));
            const {body} = await res.json();
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            
            if(parsedBody.isUserAdded) 
                setAuthState({error:false, page:'login'});

            } 
            catch(err){
                setAuthState({error:true});
            
                console.log(err);
            }
         
    }
    
    return <>
    {authState.page === 'login' ? <Login authState={authState} setAuthState={setAuthState} handleLogin={handleLogin} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>  : <SignUp authState={authState} handleInputChange={handleInputChange} handleSubmit={handleSubmit} setAuthState={setAuthState} handleSignUp={handleSignUp}/>}
    </>
}

export default Auth
