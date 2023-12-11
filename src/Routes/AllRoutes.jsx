import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Posts from '../Pages/Posts'
import PostsEdit from '../Pages/PostsEdit'
import AddPost from '../Pages/AddPost'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/posts'element={<Posts/>} />
            <Route path="/add" element={<AddPost/>}/>
            <Route path='/edit/:id' element={<PostsEdit/>}/>
        </Routes>
    </div>
  )
}
