// Hooks
import { useDocument } from '../../hooks/useDocument'
import { useParams } from 'react-router-dom'

// Styles
import './Profile.css'

import React from 'react'

export default function Profile() {
    const { id } = useParams()
    const { error, document } = useDocument('users', id)
    
    if (error) {
        return <div className="error">{ error }</div>
    }

    if (!document) {
        return <div className="loading">Loading</div>
    }

    return (
        <div>
            <h1>Profile</h1>
            <p>{document.displayName}</p>
        </div>
    )
}
