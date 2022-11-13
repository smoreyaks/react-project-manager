// Styles & Images
import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'

import { NavLink } from 'react-router-dom'
import Avatar from './Avatar'

import { useAuthContext } from '../hooks/useAuthContext'

export default function Sidebar() {
    const { user } = useAuthContext()
    
    return (
        <div className='sidebar'>
            <div className="sidebar-content">
                <div className='user'>
                    
                    <Avatar src={user.photoURL} />

                    <p>Hey {user.displayName}</p>
                </div>
                <nav className='links'>
                    <NavLink to="/profile">
                        <img src={AddIcon} alt="Add Project Icon" />
                        <span>Profile</span>
                    </NavLink>
                    <NavLink exact to="/">
                        <img src={DashboardIcon} alt="Dashboard Icon" />
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink to="/create">
                        <img src={AddIcon} alt="Add Project Icon" />
                        <span>New Project</span>
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}
