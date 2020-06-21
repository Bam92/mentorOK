import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

  import { Mentors, Mentor, Home, Login } from '../App'
  import './Navbar.css'

const Navbar = () => {
  
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '.8em 1.8em', 
  }

  return ( 
    <Router>
    <div>
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

      <Switch>
        <Route path="/mentors/:mentorname">
          <Mentor />
        </Route>
        <Route path="/mentors">
          <Mentors />
        </Route>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    </div>
  </Router>       

  )
     }


  export default Navbar
  