import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import VideoPlayer from '../Pages/VideoPlayer'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path="/play" element={<VideoPlayer/>} ></Route>
    </Routes>
  )
}

export default AllRoutes