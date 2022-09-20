import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route,} from "react-router-dom";
import {Routes} from "react-router-dom"
import logo from './logo.svg'
import './App.css'
import Home from './home' 
import SingleProductPage from './singlepost'
import Create from './create';


function App() {


 


  return (
    <>
    <Routes>
    <Route path='/' element={Home()}/>
    <Route path='/create' element={Create()}/>
    
   
    
    </Routes>
    </>

  )
}

export default App
