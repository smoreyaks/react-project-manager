// Hooks
import { useEffect, useState } from "react"

// Firebase
import { projectFirestore } from '../firebase/config'

export const useDocument = (collection, id) => {
    
    // State
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
    // Realtime data for document
    useEffect(() => {
        const ref = projectFirestore.collection(collection).doc(id)
        const unsubscribe = ref.onSnapshot((snapshot) => {
            // Update document state to match what comes back from snapshot
            setDocument({...snapshot.data(), id: snapshot.id})
            setError(null)
        }, (err) => {
            setError('Failed to get document')
        })

        return () => unsubscribe()

    }, [collection, id])

    return { document, error }
}