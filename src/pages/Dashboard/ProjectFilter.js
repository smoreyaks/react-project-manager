// React
import React from 'react'

// Hooks
import { useState } from 'react'

const filterList = [
                        'All', 
                        'Assigned', 
                        'Created By', 
                        'Development', 
                        'Design', 
                        'Marketing', 
                        'Sales'
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
                        onClick={() => handleClick(f)}
                        className={currentFilter === f ? 'active' : ''}
                    >
                        {f}
                    </button>
                ))}
            </nav>
        </div>
    )
}
