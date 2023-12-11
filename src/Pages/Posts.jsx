import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Posts() {
    const [data,setData]=useState([]);
    const[toggle,setToggle]=useState(false)

    const fetchData=()=>{
        axios.get("https://vast-rose-caridea-gown.cyclic.cloud/posts",{
            headers:{
                "Authorization":localStorage.getItem("token")
            }})
            .then((res)=>setData(res.data.posts))
    }

    const handleDelte=(id)=>{
        axios.delete(`https://vast-rose-caridea-gown.cyclic.cloud/postss/${id}`,{
            headers:{
                "Authorization":localStorage.getItem("token")
            }})
            .then((res)=>setData(!toggle))
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div> 

        {data.length>0?data.map((e)=>
            (
                <div>
                    <h1>Title: {e.title}</h1>
                    <h1>Body: {e.body}</h1>
                    <h1>Device:{e.device}</h1>
                   <Link to={`update/${e._id}`}><button>Edit</button></Link> 
                   
                    <button onClick={()=>handleDelte(e._id)}>Delete</button>

                </div>
            )
        ):(<h1>No data</h1>)}
    </div>
  )
}
