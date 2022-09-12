// Hooks
import { useState } from 'react'

// Styles
import './Signup.css'


export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDsiplayName] = useState('')
    const [thumbnail, setThumbnail] = useState(null)

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
                        // value={thumbnail}
                        required
                    />
                </label>
                <button className='btn'>Sign Up</button>
                
            </form>
        </div>
    )
}
