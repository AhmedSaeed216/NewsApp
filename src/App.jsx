import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import News from './Components/News'
import Home from './Components/Home'
import Bussiness from './Components/Bussiness'
import Culture from './Components/Culture'
import Earth from './Components/Earth'
import Innovation from './Components/Innovation'
import Sport from './Components/Sport'
import Travel from './Components/Travel'
import NewsDetail from './Components/NewsDetail'
import AllNews from './Components/AllNews'

import Bottom from './Components/Bottom'



function App() {

  const router=createBrowserRouter([
    {path:"/", element:<><Navbar/><AllNews/></>},
    {path:"/news", element:<><Navbar/><News/></>},
    {path:"/sport", element:<><Navbar/><Sport/></>},
    {path:"/bussiness", element:<><Navbar/><Bussiness/></>},
    {path:"/innovation", element:<><Navbar/><Innovation/></>},
    {path:"/culture", element:<><Navbar/><Culture/></>},
    {path:"/travel", element:<><Navbar/><Travel/></>},
    {path:"/earth", element:<><Navbar/><Earth/></>},
    
  ])

  return (
    <>
       <RouterProvider router={router}/>
      <Bottom/>
       
    </>
  )
}

export default App
