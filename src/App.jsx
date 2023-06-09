import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WatchPage from './pages/WatchPage';
import MainContainer from './components/MainContainer';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body></Body>,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage></WatchPage>
      }
    ],
  },

]);
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <RouterProvider router={router} />
    </>
  )
}

export default App