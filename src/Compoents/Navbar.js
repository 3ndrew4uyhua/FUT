import React from 'react'
import './Navbar.css'
import {Routes, Route, Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='container'>
                  <nav clsssName='nav'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/Login'>Login</Link>
      </nav>
        </div>
    
    )
}

export default Navbar;

    // <div className="Navbar">
    // {/* <ul>
    //     <li>home</li>
    //     <li>Contact</li>
    //     <li>Login</li>
    // </ul> */}
    // </div>