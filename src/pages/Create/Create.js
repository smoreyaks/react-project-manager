// Styles
import { useState } from 'react'
import './Create.css'

import Select from 'react-select'

const catagories = [
    { value: 'development', label: 'Development' },
    { value: 'design', label: 'Design' },
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
]

export default function Create() {
    /* Form Field Values */
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [category, setCategory] = useState('')
    const [assignedUsers, setAssignedUsers] = useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, details, dueDate, category.value);
    }

    return (
        <div className='create-form'>
            <h2 className='page-title'>
                Create A New Project
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Project Name:</span>
                        <input 
                            required
                            type="text" 
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </label>
                    <label>
                        <span>Project Details:</span>
                        <textarea
                            required
                            type="text" 
                            onChange={(e) => setDetails(e.target.value)}
                            value={details}
                        />
                    </label>
                    <label>
                        <span>Set Due Date:</span>
                        <input
                            required
                            type="date"
                            onChange={(e) => setDueDate(e.target.value)}
                            value={dueDate}
                        />
                    </label>
                    <label>
                        <span>Project Category:</span>
                            <Select 
                                onChange={(option) => setCategory(option)}
                                options={catagories}
                            />
                    </label>
                    <label>
                        <span>Assign To:</span>
                        {/* Assignee Select */}
                    </label>
                    <button className="btn">Add Project</button>
                </form>
            </h2>
        </div>
    )
}
