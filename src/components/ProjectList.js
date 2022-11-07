// React
import React from 'react'
import { Link } from 'react-router-dom'

// Hooks
import { useCollection } from '../hooks/useCollection'

// Style
import './ProjectList.css'

// Components
import Avatar from './Avatar'

export default function ProjectList({ projects }) {
    
    return (
        <div className='project-list'>
            { projects.length === 0 && <p>No projects yet!</p> }
            { projects.map(project => (
                <Link 
                    to={`/projects/${project.id}`} 
                    key={ project.id }
                >
                    <h4>{project.name}</h4>
                    <div className="due-date">
                        <p className='date-string'>Due by {project.dueDate.toDate().toDateString()}</p>
                        <div className='created-by'>
                            <p>Created by</p> 
                            <Avatar className='avatar' src={project.createdBy.photoURL} />
                        </div>
                    </div>
                    <div className="assigned-to">
                        <ul>
                            {project.assignedUsersList.map(user => (
                                <li key={user.photoURL}>
                                    <Avatar src={user.photoURL}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Link>
            ))}
            <br />
        </div>
    )
}
