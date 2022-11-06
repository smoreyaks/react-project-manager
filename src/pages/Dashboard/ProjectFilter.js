// React
import React from 'react'

// Hooks
import { useState } from 'react'

const filterList = [
                        ['All', 'All'], 
                        ['Assigned', 'Assigned'], 
                        ['createdBy', 'Created By'], 
                        ['Development', 'Development'], 
                        ['Design', 'Design'], 
                        ['Marketing', 'Marketing'], 
                        ['Sales', 'Sales']
]


export default function ProjectFilter({ changeFilter }) {
    const [currentFilter, setCurrentFilter] = useState('all')

    const handleClick = (newFilter) => {
        setCurrentFilter(newFilter)
        changeFilter(newFilter)
    }

    return (
        <div className='project-filter'>
            <nav>
                <p>Filter By:</p>
                { filterList.map((f) => (
                    <button 
                        key={f}
                        onClick={() => handleClick(f[0])}
                        className={currentFilter === f[0] ? 'active' : ''}
                    >
                    {f[1]}
                    </button>
                ))}
            </nav>
        </div>
    )
}
