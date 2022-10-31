// Style
import './ProjectList.css'

// React
import React from 'react'

// Hooks
import { useCollection } from '../hooks/useCollection'

export default function ProjectList({ projects }) {
    
    return (
        <div>
            { projects.length === 0 && <p>No projects yet!</p> }
            { projects.map(project => (
                <div key={ project.id }>{ project.name }</div>
            ))}
        </div>
    )
}
