import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navigation from '../Layout/Navigation'
import Home from '../Pages/Home'
import Project from '../Pages/Project'
import Qualification from '../Pages/Qualification'
import Contact from '../Pages/Contact'
import Service from '../Pages/Service'
import Footer from '../Layout/Footer'
export default function Router() {
  return (
   <BrowserRouter>
   <Navigation/>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/project" element={<Project/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/qualification" element={<Qualification/>}/>
       <Route path="/service" element={<Service/>}/>
    </Routes>
    <br/>
    <Footer/>
   </BrowserRouter>
  )
}
