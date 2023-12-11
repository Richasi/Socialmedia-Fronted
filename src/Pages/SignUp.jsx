import axios from 'axios'
import React, { useState } from 'react'

export default function SignUp() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [gender,setGender]=useState("")
    const [password,setPassword]=useState("")
    const [display,setDisplay]=useState("")
    const handleSubmit=()=>{
        let payload={
            name,
            email,
            gender,
            password
        }
        // console.log(payload)
        axios.post("https://vast-rose-caridea-gown.cyclic.cloud/users/register",payload)
        .then((res)=>setDisplay(res.data.msg))
        .catch((err)=>setDisplay(err))
    }
  return (
    <div style={{display:"grid", width:"50%", margin:"auto",border:"1px solid black", marginTop:"20px",gap:"10px"}}>
        {/* <form> */}
            <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
            <input type="text" placeholder='gender' onChange={(e)=>setGender(e.target.value)} />
            <input type="text" placeholder='password'  onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        {/* </form> */}
    </div>
  )
}
