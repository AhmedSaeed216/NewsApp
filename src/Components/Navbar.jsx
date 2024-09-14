import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
// import  from 'react'
import Drawer from './Drawer'
import SignUp from './SignUp'
import { useNavigate } from 'react-router-dom'


const Li = ({ children }) => {
    return (
        <li className='items hover:underline  cursor-pointer flex gap-5'>
            {children}
        </li>)
}

const Span = ({ children }) => {
    return (<span className=' bg-black w-9 flex items-center justify-center text-white font-bold text-xl  p-1'>{children}</span>

    )
}


const Navbar = () => {
    const [isopen, setisopen] = useState(false)
    const [showSignup, setShowSignup] = useState(false);


    const toggleDrawer = () => { setisopen(!isopen) }


    const handleSigup = () => {
        setShowSignup(true);
    };


    const handlecloseup = () => {
        setShowSignup(false)
    }
    return <>
        <nav className=' sticky top-0 z-50  h-50  '>
            <div className=" bg-white container px-2 ">
                <div className="upper   flex  h-16  justify-between">

                    <div className="btn flex gap-2 ">
                        <div className="lines w-10 py-2 ">

                            <Hamburger toggled={isopen} toggle={toggleDrawer} />
                        </div>


                        <button className="b1 w-10 bg-white text-black font-bold text-xl">🔍</button>
                    </div>

                    <div className="heading flex gap-1 h-10 m-3  ">
                        <Span >B</Span>
                        <Span >B</Span>
                        <Span >C</Span>
                        {/* <span className=' bg-black w-9 flex items-center justify-center text-white font-bold text-xl p-1'> B</span> */}
                        {/* <span className=' bg-black w-9  text-white font-bold text-xl  p-1'>B</span>
                        <span className=' bg-black w-9  text-white font-bold text-xl  p-1 '>C</span> */}
                    </div>

                    <div className="member flex gap-5 h-10 m-3">

                        <button className='register   text-white  text-xl bg-black  w-24' onClick={handleSigup}>  Register </button>

                        <button className='signup text-black  text-black  text-xl  ' onClick={handleSigup}>Sign Up</button>
                    </div>
                </div>
                <hr className=' m-2' />


                <div className="lower hidden lg:block  md:hidden  sm:hidden ">
                    <ul className='flex gap-4  justify-center font-bold     '>


                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/news">News</Link>

                        </li>
                        <li>
                            <Link to="/sport">sport</Link>

                        </li>
                        <li>
                            <Link to="/culture">culture</Link>
                        </li>
                        <li>
                            <Link to="/bussiness">Bussiness</Link>
                        </li>
                        <li>
                            <Link to="/earth">Earth</Link>
                        </li>
                        <li>
                            <Link to="/travel">Travel</Link>
                        </li>
                        <li>
                            <Link to="/innovation">Inovation</Link>
                        </li>
                        <li><a href="https://anycityweatherupdate.netlify.app/">Weather</a></li>
                    </ul>
                </div>
                <hr className=' m-2' />



            </div>
        </nav>

        <Drawer isOpen={isopen} toggleDrawer={toggleDrawer} />

        {showSignup && (
            <div className='fixed  inset-0 bg-gradient-to-r from-red-300 to-black bg-opacity-50 flex justify-center items-center z-50'><SignUp onClose={handlecloseup} /></div>
        )}
    </>
}

export default Navbar

