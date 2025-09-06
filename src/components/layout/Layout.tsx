import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'


const Layout = () => {
  return (
    <div>
    <Navbar/>
    <main className='container mx-auto px-2.5 md:px-0'>
    <Outlet/>  
    </main>
    </div>
  )
}

export default Layout