import React from 'react'

export const Comments = ({ Comment }) => {
    return (
        <div className='mx-5 p-2  flex w-1/2' >
            <div>
                <img className='w-8 rounded-full' alt='pofile' src={Comment.snippet.topLevelComment.snippet.authorProfileImageUrl}></img>
            </div>
            <div className='mx-2'>
                <h1 className='font-semibold'>{Comment.snippet.topLevelComment.snippet.authorDisplayName}</h1>
                <p>{Comment.snippet.topLevelComment.snippet.textDisplay}</p>
            </div>

        </div>
    )
}
