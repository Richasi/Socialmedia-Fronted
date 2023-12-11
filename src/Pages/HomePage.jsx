import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function HomePage() {
    const [data,setData]=useState("")
    useEffect(()=>{
        axios.get("https://vast-rose-caridea-gown.cyclic.cloud/")
        .then((res)=>setData(res.data.msg))

    },[])
  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}
