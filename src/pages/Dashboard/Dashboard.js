// Hooks
import {useCollection } from '../../hooks/useCollection'
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
    const [currentFilter, setCurrentFilter] = useState('all')

    const changeFilter = (newFilter) => {
        setCurrentFilter(newFilter)
    }

    const projects = documents ? documents.filter((document) => {
        switch (currentFilter) {
            case "All": 
                return true;
            
            case "Owned": 
                let assignedToMe = false;
                document.assignedUsersList.forEach((u) => {
                    if (user.uid === u.id) {
                        assignedToMe = true
                    }
                })
                return assignedToMe;

            case "Development": 

            case "Design": 

            case "Sales": 

            case "Marketing": 
                console.log(document.category, currentFilter)
                return document.category === currentFilter
            
            default :
                return true

        }
    }) : null

    return (
        <div>
            <h2 className="page-title">Dashboard</h2>
            { error && <p className="error">{error}</p> }
            { documents && (
                <ProjectFilter currentFilter={currentFilter} changeFilter={changeFilter} />
            )}
            { projects && <ProjectList projects={projects} /> }
        </div>
    )
}
