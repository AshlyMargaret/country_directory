import React from 'react'
import HomePage from './Pages/HomePage/HomePage'
import SignInPage from './Pages/SignInPage/SignInPage'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function Main() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route path="/">
            <Route index element={<SignInPage/>} />
            <Route path="home" element={ <HomePage/>} />        
          </Route>
        </Routes>  
      </div> 
    </BrowserRouter> 
  )
}

export default Main