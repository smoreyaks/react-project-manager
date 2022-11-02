// React
import React from 'react'

// Hooks
import { useState } from 'react'


const filterList = ['All', 'Owned', 'Development', 'Design', 'Marketing', 'Sales']

export default function ProjectFilter({currentFilter, changeFilter}) {

    

    const handleClick = (newFilter) => {
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
