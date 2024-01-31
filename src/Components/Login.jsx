import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login({setOnline}) {
    const [username , setUsername]=useState("") ; 
    const navigate=useNavigate();
  return (
    <div>
        <form >
            <input type='text' placeholder='usernames' onChange={(e)=>setUsername(e.target.value)}/>
            <input type='password' placeholder='password'/>
            <button onClick={(e)=>{
            e.preventDefault();
            setOnline(true);
            navigate("/", {state :{username:username}})
        }}>Connexion</button>
        </form>
    </div>
  )
}
