
import React from 'react'
import Genconian from './Componenets/Genconian'
import Login from './Componenets/Login'
import About from './Componenets/About'
import Contact from './Componenets/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componenets/Navbar'
import Post from './Componenets/Post'
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Navbar />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/genconians' element={<Genconian />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route exact path='/Post' element={<Post />}></Route>

        </Routes>
      </Router>
    </>
  )
}
