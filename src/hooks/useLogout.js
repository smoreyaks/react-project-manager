// Firebase
import { projectAuth, projectFirestore } from '../firebase/config'

// Hooks
import { useEffect, useState } from 'react'
import { useAuthContext } from './useAuthContext'

// Main Component
export const useLogout = () => {
  
  // Initial State
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch, user } = useAuthContext()
  
  const logout = async () => {
    setError(null)
    setIsPending(true)

    // sign the user out
    try {

      // Update Online Status
      const { uid } = user
      await projectFirestore.collection('users').doc(uid).update({
        online: false,
      })

      await projectAuth.signOut()
      
      // dispatch logout action
      dispatch({ type: 'LOGOUT' })

      // update state
      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      } 
    } 
    catch(err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { logout, error, isPending }
}