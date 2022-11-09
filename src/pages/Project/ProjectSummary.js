// React
import React from 'react'

// Hooks
import { useAuthContext } from '../../hooks/useAuthContext'
import { useHistory } from 'react-router-dom'
import { useFirestore } from '../../hooks/useFirestore'
// import { useCollection } from '../../hooks/useCollection'

// Components
import Avatar from '../../components/Avatar'


export default function ProjectSummary({ project }) {
    const { deleteDocument } = useFirestore('projects')
    const { user } = useAuthContext()
    // const { documents, error } = useCollection('projects')
    const history = useHistory()
    
    const handleClick = (e) => {
        deleteDocument(project.id)
        history.push('/')
    }

    return (
        <div>
            <div className="project-summary">
                <h2 className="page-title">{ project.name }</h2>
                <p className="due-date">
                    Project due by { project.dueDate.toDate().toDateString() }
                </p>
                <div className='created-by'>
                    <p>Created By</p>
                    <Avatar src={ project.createdBy.photoURL }/>
                </div>
                <p className="details">{ project.details }</p>
                <h4>Assigned To:</h4>
                <div className="assigned-users">
                { project.assignedUsersList.map(user => (
                    <div key={user.id}>
                        <Avatar src={ user.photoURL }/>
                    </div>
                ))}
                </div>
            </div>
            { user.uid === project.createdBy.id && (
                <button className="btn" onClick={handleClick}>Mark As Complete</button>
            )}
        </div>
    )
}
