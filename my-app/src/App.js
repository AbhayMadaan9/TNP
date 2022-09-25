
import React from 'react'
import Genconian from './Componenets/Genconian'
import Login from './Componenets/Login'
import About from './Componenets/About'
import Contact from './Componenets/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componenets/Navbar'
//import Navbar from './Componenets/Navbar'
//import Genco_cards from './Componenets/Genco_cards'
export default function App() {
  return (
    <>
    <Genconian/>
        <Router>
    <Routes>
     <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/genconians' element={<Genconian />}></Route>
      <Route exact path='/contact' element={<Contact />}></Route>
    </Routes>
  </Router>
    </> 
  )
}
