// React 
import React from 'react'
import { Link } from 'react-router-dom'

// Hooks
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

// Styles
import styles from './Navbar.css'
import temple from '../assets/temple.svg'

export default function Navbar() {
    const { logout, isPending } = useLogout()
    const { user } = useAuthContext()

    return (
        <div className='navbar'>
            <ul>
                <li className="logo">
                    <img src={temple} alt="Blocks Logo" />
                    <span>Blocks</span>
                </li>
                { !user && ( 
                    <>
                        <li><Link to="/login">Log In </Link></li> 
                        <li><Link to="/signup">Sign Up </Link></li> 
                    </>
                )}
                
                { user && !isPending && <button className="btn" onClick={logout}>Log Out</button> }
                { isPending && <button className="btn" disabled>Logging Out</button> }
            </ul>
        </div>
    )
}