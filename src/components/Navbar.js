import React from 'react'
import { Link } from 'react-router-dom'


// Styles
import styles from './Navbar.css'
import temple from '../assets/temple.svg'

export default function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                <li className="logo">
                    <img src={temple} alt="Blocks Logo" />
                    <span>Blocks</span>
                </li>
                <li><Link to="/login">Log In </Link></li>
                <li><Link to="/signup">Sign Up </Link></li>
                <button className="btn">Log Out</button>
            </ul>
        </div>
    )
}
