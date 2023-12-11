import axios from 'axios'
import React, { useState } from 'react'

export default function AddPost() {
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const [device,setDevice]=useState("")
    const [display,setDispay]=useState("")
    const handleSubmit=()=>{
        const payload={
            title,
            body,
            device
        }
        axios.post("https://vast-rose-caridea-gown.cyclic.cloud/posts/add",payload,{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
        .then((res)=>setDispay(res.data.msg))
        .catch((err)=>setDispay(err))
    }
  return (
    <div>
          <div style={{display:"grid", width:"50%", margin:"auto",border:"1px solid black", marginTop:"20px",gap:"10px"}}>
      
            <input type="text" placeholder='title' onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" placeholder='body' onChange={(e)=>setBody(e.target.value)} />
            <input type="text" placeholder='device' onChange={(e)=>setDevice(e.target.value)} />
            
            <button onClick={handleSubmit}>Submit</button>
     
    </div>
    <div>
        <h1>{display}</h1>
    </div>
    </div>
  )
}
