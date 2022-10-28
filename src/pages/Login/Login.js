// Hooks
import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import { useLogout } from '../../hooks/useLogout'

// Styles
import './Login.css'

export default function Login() {
    // State 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const { login, isPending, error } = useLogin()

    // Submit Login Action
    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }
    

    return (
        <form onSubmit={handleSubmit} className="auth-form">
        <h2>Log In</h2>
        
        {/* Email Section */}
        <label>
            <span>Email:</span>
            <input
                required 
                type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
            />
        </label>

        {/* Password Section */}
        <label>
            <span>Password:</span>
            <input
                required
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
            />
        </label>
        
            {!isPending && <button className="btn">Log In</button>}
            {isPending && <button className="btn" disabled>Loading</button>}
            {error && <div className="error">{error}</div>}
        </form>
         
    )
}
