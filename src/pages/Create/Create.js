import { useState } from 'react'
import { useCollection } from '../../hooks/useCollection'

// Styles
import './Create.css'

import Select from 'react-select'
import { useEffect } from 'react'

const catagories = [
    { value: 'development', label: 'Development' },
    { value: 'design', label: 'Design' },
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
]

export default function Create() {
    const { documents } = useCollection('users')
    const [users, setUsers] = useState([])
    
    /* Form Field Values */
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [category, setCategory] = useState('')
    const [assignedUsers, setAssignedUsers] = useState([])

    useEffect(() => {
        if(documents) {
            const options = documents.map(user => {
                return {
                    value: user,
                    label: user.displayName
                }
            })
            setUsers(options)
        }
    }, [documents])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, details, dueDate, category.value, assignedUsers);
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
                        <Select 
                            onChange={(options) => setAssignedUsers(options)}
                            options={users}
                            isMulti
                        />
                    </label>
                    <button className="btn">Add Project</button>
                </form>
            </h2>
        </div>
    )
}
