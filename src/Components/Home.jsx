import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Home({Online, setOnline}) {
    const navigate= useNavigate() ; 
    
    useEffect(()=>{
     Online ?null :  navigate("/login")   
    })
    const data = useLocation() ? useLocation() : "";
  return (
    <div>
        <p>Welcome {data.state.username}  </p>
        <p>Home</p>
        <button onClick={()=>{
            setOnline(false);
            navigate("/login")
        }}>deconnexion</button>
    </div>
  )
}
