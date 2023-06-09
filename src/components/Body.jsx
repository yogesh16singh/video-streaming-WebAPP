import React from 'react'
import SideContainer from './SideContainer'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
    return (
        <div className='flex'>
            <SideContainer></SideContainer>
            <Outlet></Outlet>
        </div>
    )
}

export default Body