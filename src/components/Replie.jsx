import React from 'react'

const Replie = ({ replie }) => {
    return (
        <div className='mx-5 p-2  flex w-1/2' >
            <div>
                <img className='w-8 rounded-full' alt='pofile' src={replie.snippet.authorProfileImageUrl}></img>
            </div>
            <div className='mx-2'>
                <h1 className='font-semibold'>{replie.snippet.authorDisplayName}</h1>
                <p>{replie.snippet.textDisplay}</p>
            </div>

        </div>
    )
}

export default Replie