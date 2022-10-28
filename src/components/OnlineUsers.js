// React
import React from 'react'

// Hooks
import { useCollection } from '../hooks/useCollection'

// Styles
import './OnlineUsers.css'

// Components
import Avatar from './Avatar'

export default function OnlineUsers() {
    const { error, documents } = useCollection('users')

    return (
        <div className='user-list'>
            
            <h2>All Users</h2>
            { error && <div className='error'>{ error }</div> }
            { documents && documents.map(user => (
                <div key={user.id} className="user-list-item">
                    { user.online && <span className='online-user'></span> }
                    <span>{user.displayName}</span>
                    <Avatar src={user.photoURL} />
                </div>
            ))}
        </div>
    )
}


/*

    Logging into another user Incognito via Google Chrome 106.0.5249.119 64 bit
    deletes document displayName and photoURL data in Firebase. The online property isn't deleted.

*/
