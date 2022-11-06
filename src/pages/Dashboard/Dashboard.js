// Hooks
import { useCollection } from '../../hooks/useCollection'
import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

// Styles
import './Dashboard.css'

// Components
import ProjectList from '../../components/ProjectList'
import ProjectFilter from './ProjectFilter'

import userEvent from '@testing-library/user-event'

export default function Dashboard() {
    const { user } = useAuthContext()
    const { documents, error } = useCollection('projects')
    const [filter, setFilter] = useState('all')

    const changeFilter = (newFilter) => {
        setFilter(newFilter)
    }

    const projects = documents ? documents.filter(document => {
        switch (filter) {
            case 'All': 
                return true;
            case 'Assigned': 
                let assignedToMe = false
                console.log(document.assignedUsersList)
                document.assignedUsersList.forEach(u => {
                    if (u.id === user.uid) {
                        assignedToMe = true
                    }
                })
                return assignedToMe
            case 'createdBy':
                let createdByMe = false
                console.log(document.createdBy.id)
                if (document.createdBy.id === user.uid) {
                    createdByMe = true
                }
                return createdByMe
            case 'Development':
            case 'Design':
            case 'Sales':
            case 'Marketing':
                console.log(document.category, filter)
                return document.category === filter
            default:
                return true
            }
        }) : null

    return (
        <div>
            <h2 className="page-title">Dashboard</h2>
            { error && <p className="error">{error}</p> }
            { documents && <ProjectFilter changeFilter={changeFilter} /> }
            { projects && <ProjectList projects={projects} /> }
        </div>
    )
}
