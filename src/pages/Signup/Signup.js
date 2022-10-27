import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

// styles
import './Signup.css'

export default function Signup() {
  // State 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)

  // Sign Up - Hook & Initial State
  const { signup, error, isPending } = useSignup()
  
  // Sign Up 
  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName, thumbnail)
  }

  const handleFileChange = (e) => {
    setThumbnail(null)
    let selected = e.target.files[0]
    console.log(selected)
    
    // File Select Check - If no file selected return error message
    if (!selected) {
      setThumbnailError('Please select a file')
      return
    }
    
    // File Type Check - If file not an image return error message
    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image')
      return
    }
    
    // File Size Check - If file bigger than 100kb return error
    if (selected.size > 100000) {
      setThumbnailError('Image file size must be less than 100kb')
      return
    }
    
    // Reset error message
    setThumbnailError(null)
    
    // Set Thumbnail as Selected Image
    setThumbnail(selected)
    console.log('thumbnail updated')
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Sign Up</h2>
      
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

      {/* Display Name Section */}
      <label>
        <span>Display Name:</span>
        <input
          required
          type="text" 
          onChange={(e) => setDisplayName(e.target.value)} 
          value={displayName}
        />
      </label>
      
      <label>
        <span>Profile Image:</span>
        <input 
          required
          type="file"
          onChange={handleFileChange}
        />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>

      {!isPending && <button className="btn">Sign Up</button>}
      {isPending && <button className="btn" disabled>Loading</button>}
      {error && <div className="error">{error}</div>}
    </form>
  )
}