import React, { useState } from 'react'


const ButtonListContainer = () => {
    const [buttonData, setButtonData] = useState(['music', 'Day Trading', 'Mixes', 'Sales', 'Trailers', 'T-Series', 'AI',
        'Live', 'Biology', 'Comedy', 'News', 'Lectues', 'Tourist', 'Watched'])
    return (
        <div className='flex m-2'>
            <button className='m-2 py-1 px-2 bg-black text-white rounded-md'>All</button>
            {buttonData.map((item, index) => {
                return <button key={index} className='m-2 py-1 px-2 bg-gray-100 hover:bg-gray-300 rounded-md'>{item}</button>
            })}

        </div>
    )
}

export default ButtonListContainer