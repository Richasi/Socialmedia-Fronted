import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{display:"flex", justifyContent:"space-between",paddingLeft:"20px", paddingRight:"20px"}}>
        <Link to={"/"}>Home</Link>
        <Link to={"/posts"}>Posts</Link>
        <Link to={"/add"}>Add Posts</Link>
        <Link to={"/signup"}> Sign Up</Link>
        <Link to={"/login"}>Login</Link>
    </div>
  )
}
