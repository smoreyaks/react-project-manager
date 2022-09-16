// Hooks
import { useState } from 'react'

// Styles
import './Signup.css'


export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDsiplayName] = useState('')
    const [thumbnail, setThumbnail] = useState(null)
    const [thumbnailError, setThumbnailError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password, displayName, thumbnail)
    }

    const handleFileChange = (e) => {
        setThumbnail(null)
        let selected = e.target.files[0]
        console.log(selected)
        
        if (!selected) {
            setThumbnailError('Please select a file')
            return
        }
        if (!selected.type.includes('image')) {
            setThumbnailError('Selected file must be an image')
            return
        }
        if (selected.size > 100000) {
            setThumbnailError('Image file size must be less than 100kb')
            return
        }

        setThumbnailError(null)
        setThumbnail(selected)
        console.log('Thumbnail Updated')
    }


    return (
        <div className='auth-form'>
            <form>
                <h2>Sign Up</h2>
                <label>
                    <span>Email:</span>
                    <input 
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </label>

                <label>
                    <span>Password:</span>
                    <input 
                        type="text"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        />
                </label>
                <label>
                    <span>Display Name:</span>
                    <input 
                        type="text"
                        onChange={(e) => setDsiplayName(e.target.value)}
                        value={displayName}
                        required
                    />
                </label>
                <label>
                    <span>Profile Thumbnail:</span>
                    <input 
                        type="file"
                        // onChange={(e) => setThumbnail(e.target.value)}
                        onChange={handleFileChange}
                        // value={thumbnail}
                        required
                    />
                    { thumbnailError && <div className="error">{ thumbnailError }</div> }
                </label>
                <button className='btn'>Sign Up</button>
                
            </form>
        </div>
    )
}
