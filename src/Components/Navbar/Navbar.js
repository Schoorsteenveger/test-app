import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar() {
    return (
        <div className='navbar'>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/opdracht1">Opdracht1</Link>
                <Link to="/opdracht2">Opdracht2</Link>
                <Link to="/Opdracht3">Opdracht3</Link>
                <Link to="/Counter">Counter</Link>
                <Link to="/Searchbar">Searchbar</Link>
                

            </div>
        </div>
    )
}

export default Navbar
