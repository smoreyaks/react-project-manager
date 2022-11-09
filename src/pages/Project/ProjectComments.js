// React
import React from 'react'

// Firebase
import {timestamp} from '../../firebase/config'

// Date FNS Package
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

// Hooks
import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import Avatar from '../../components/Avatar'

export default function ProjectComments({ project }) {
    // State
    const [newComment, setNewComment] = useState('')
    
    const { user } = useAuthContext()
    const {updateDocument, response } = useFirestore('projects')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const commentToAdd = {
            displayName: user.displayName,
            photoURL: user.photoURL,
            content: newComment,
            createdAt: timestamp.fromDate(new Date()),
            id: Math.random()*100
        }
        
        await updateDocument(project.id, {
            comments: [...project.comments, commentToAdd]
        })
        if(!response.error) {
            setNewComment('')
        }
    }
    
    
    return (
        <div className='project-comments'>
            <ul>
                { project.comments.length > 0 && project.comments.map(comment => (
                    <li key={ comment.id }>
                        <div className="comment-author">
                            <Avatar src={comment.photoURL}/>
                            <p>{comment.displayName}</p>
                        </div>
                        <div className="comment-date">
                            <p>{formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true })}</p>
                        </div>
                        <div className="comment-content">
                            <p>
                                { comment.content }
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
            <form className='add-comment' onSubmit={handleSubmit}>
                <label>
                    <textarea
                        required
                        onChange={(e) => setNewComment(e.target.value)}
                        value={newComment}
                        placeholder='Thoughts?'
                    >
                    </textarea>
                </label>
                <button className="btn panel-btn">Add Comment</button>
            </form>
        </div>
    )
}
