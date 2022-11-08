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
                    { user.online && <div className='online-user'></div> }
                    { !user.online && <div className='offline-user'></div> }
                    <div className="name-avatar">
                        <div className='user-display-name'>{user.displayName}</div>
                        <Avatar src={user.photoURL} />
                    </div>
                </div>
            ))}
        </div>
    )
}


/*

    Logging into another user Incognito via Google Chrome 106.0.5249.119 64 bit
    deletes document displayName and photoURL data in Firebase. The online property isn't deleted.

*/
