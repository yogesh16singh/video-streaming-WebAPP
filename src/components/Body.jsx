import React from 'react'
import SideContainer from './SideContainer'
import MainContainer from './MainContainer'
const Body = () => {
    return (
        <div className='flex'>
            <SideContainer></SideContainer>
            <MainContainer></MainContainer>
        </div>
    )
}

export default Body