import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
         <div style={{width:"100vw" , height:"10vh", backgroundColor:"black", color:"white"}}>
        <ul style={{display:"flex",justifyContent:"space-around", width:"30vw"}}>
          <li> <Link to="/">Home</Link></li>
          
        </ul>
      </div>
    </div>
  )
}
