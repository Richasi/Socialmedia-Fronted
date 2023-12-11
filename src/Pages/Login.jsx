import axios from 'axios'
import React, { useState } from 'react'

export default function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [display,setDisplay]=useState("")
    const handleSubmit=()=>{
 const payload={
    email,password
 }
//  console.log(payload)
axios.post("https://vast-rose-caridea-gown.cyclic.cloud/users/login",payload)
.then((res)=>{
    setDisplay(res.data.msg)
    localStorage.setItem("token",res.data.token)
})
.catch((err)=>{
    setDisplay(err)
})
    }
  return (
    <div>
   <div style={{display:"grid", width:"50%", margin:"auto",border:"1px solid black", marginTop:"20px",gap:"10px",marginBottom:"20px"}}>
        <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='password'onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
            <h1>{display}</h1>
        </div>
</div>
  )
}
