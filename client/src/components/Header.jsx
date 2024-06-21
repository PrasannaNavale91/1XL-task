import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const [active, setActive] = useState(1);

    const handleClick = (index) => {
        setActive(index);
    }
  return (
    <div className="mx-w-screen-2xl mx-auto md:px-20 px-4 flex justify-between p-[20px] bg-white shadow-md">
        <div className="flex flex-row align-middle text-[#ffe55e] text-3xl font-bold"><img src='logo.png' className='flex w-10 h-10' alt='logo-img'/><span className='ml-2 text-[#ffaa00]'>G</span>local</div>
        <nav className='navbar-center hidden lg:flex'>
            <ul className='flex gap-10 list-none'>
                <li className='my-2.5'>
                    <Link   to="/"
                            className={`text-lg font-medium hover:text-[#ffaa00]
                            ${active === 1 ? 'focus:text-[#ffaa00]' : ''}`}
                            onClick={() => handleClick(1)}>Home</Link>
                </li>
                <li className='my-2.5'>
                    <Link   to="/categories"
                            className={`text-lg font-medium hover:text-[#ffaa00]
                            ${active === 2 ? 'focus:text-[#ffaa00]' : ''}`}
                            onClick={() => handleClick(2)}>Categories</Link>
                </li>
                <li className='my-2.5'>
                    <Link   to="/about"
                            className={`text-lg font-medium hover:text-[#ffaa00]
                            ${active === 3 ? 'focus:text-[#ffaa00]' : ''}`}
                            onClick={() => handleClick(3)}>About Us</Link>
                </li>
                <li className='my-2.5'>
                    <Link   to="/products"
                            className={`text-lg font-medium hover:text-[#ffaa00]
                            ${active === 4 ? 'focus:text-[#ffaa00]' : ''}`}
                            onClick={() => handleClick(4)}>Products</Link>
                </li>
                <li className='my-2.5'>
                    <Link   to="/pet-care"
                            className={`text-lg font-medium hover:text-[#ffaa00]
                            ${active === 5 ? 'focus:text-[#ffaa00]' : ''}`}
                            onClick={() => handleClick(5)}>Pet Care</Link>
                </li>
                <li className='my-2.5'>
                    <Link   to="/contact"
                            className={`text-lg font-medium hover:text-[#ffaa00]
                            ${active === 6 ? 'focus:text-[#ffaa00]' : ''}`}
                            onClick={() => handleClick(6)}>Contact</Link>
                </li>
            </ul>
        </nav>
        <div className="flex gap-7">
            <button className='ml-3 px-9 py-2 bg-[#124C5F] text-white rounded-md border-0'>
                <Link to={'/signin'}>Sign In</Link>
            </button>
            <button className='ml-3 px-9 py-2 text-[#124C5F] bg-[#c7e7e1] rounded-md border-0'>
                <Link to={'/register'}>Register</Link>
            </button>
        </div>
    </div>
  )
}

export default Header