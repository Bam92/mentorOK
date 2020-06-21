import React from 'react'
import { Link } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {
  
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '.8em 1.8em', 
  }

  return ( 
   
      <nav className="navbar" role="navigation" style={style}>
        <div id="logo">
            <Link to="/">mentorOK</Link>
        </div>
        <input type="search" placeholder="rechercher" />
        <div 
            id="nav-items"
            style={{
                display: 'flex',
                justifyContent: 'space-around'
            }}
        >
            <Link to="/mentors">Tous les mentors</Link>
            <Link to="/auth/login">Se connecter</Link>
            <Link to="/auth/signup">Se Joindre gratuitement</Link>
        </div>
     </nav>
  )
     }


  export default Navbar
  