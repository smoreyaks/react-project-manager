// Styles & Images
import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'

import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-content">
                <div className='user'>
                    {/* User Avatar & User Name */}
                    <p>Hey User</p>
                </div>
                <nav className='links'>
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
