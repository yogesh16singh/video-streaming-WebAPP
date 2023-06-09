import React from 'react'

const SideContainer = () => {
    return (
        <div>
            <div className=' border-b-2'>
                <h1 className='font-semibold m-2'>Home</h1>
                <h1 className='m-2'>Shorts</h1>
                <h1 className='m-2'>Subsciptions</h1>
            </div>
            <ul className='m-2 p-1 border-b-2'>
                <li>Library</li>
                <li>History</li>
                <li>Your Videos</li>
                <li>Your Movies</li>
                <li>Watch Later</li>
            </ul>
            <h1 className='font-semibold'>Subscriptions</h1>
        </div>

    )
}

export default SideContainer