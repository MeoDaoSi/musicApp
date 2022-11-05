import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {logo} from '../assets/img'
import {isActiveStyles, isNoActiveStyles } from '../utils/style'
import {FaCrown} from 'react-icons/fa'
import { Avatar, Button, Typography} from 'antd';
import { auth, db } from "../config/firebase.config";
import {AuthContext} from '../Context/AuthProvider';
import {motion} from 'framer-motion'

export default function Header() {
    const [isMenu, setIsMenu] = useState(false)
    const { user: {
        displayName,
        photoURL,
        role
    }} = React.useContext(AuthContext)
    return (
        <header className='flex items-center w-full p-4 md:py-2 md:px-6'>
            <NavLink to={'/'}>
                <img src={logo} alt="logo" className='w-16'/>
            </NavLink>
            <ul className='flex items-center justify-center ml-7'>
                <li className='mx-5 text-lg'><NavLink to={'/home'} className={({isActive}) => isActive ? isActiveStyles : isNoActiveStyles}>Home</NavLink></li>
                <li className='mx-5 text-lg'><NavLink to={'/musics'} className={({isActive}) => isActive ? isActiveStyles : isNoActiveStyles}>Musics</NavLink></li>
                <li className='mx-5 text-lg'><NavLink to={'/premium'} className={({isActive}) => isActive ? isActiveStyles : isNoActiveStyles}>Premium</NavLink></li>
                <li className='mx-5 text-lg'><NavLink to={'/contact'} className={({isActive}) => isActive ? isActiveStyles : isNoActiveStyles}>Contact US</NavLink></li>
            </ul>
            
            <div 
                onMouseEnter={ () => setIsMenu(true)}
                onMouseLeave={ () => setIsMenu(false)}
            className='flex items-center ml-auto cursor-pointer gap-2 relative'>
                <img src={photoURL} className='w-12 min-w-[44px] object-cover rounded-full shadow-lg' alt="" referrerPolicy='no-referrer' />
                <div className='flex flex-col'>
                    <p className='text-textColor text-lg hover:text-headingColor font-semibold'>{displayName}</p>
                    <p className='flex items-center gap-2 text-xs text-gray-500 font-normal'>Premium Member. <FaCrown className='text-sm -ml-1 text-yellow-500'/></p>
                </div>

                {isMenu && (
                    <motion.div 
                    initial={{opacity: 0, y : 50 }}
                    animate={{opacity: 1, y : 0 }}
                    exit={{opacity: 0, y : 50 }}
                    className='absolute z-10 flex flex-col p-3 top-12 right-0 w-275 gap-2 bg-card shadow-lg rounded-lg backdrop-blur-sm'>
                    <NavLink to={'/userProfile'}>
                        <p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'>Profile</p>
                    </NavLink>
                    <p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'>My Favourites</p>
                    <hr />
                    {role === 'admin' && (
                        <>
                            <NavLink to={'/dashBoard/home'}>
                                <p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'>DashBoard</p>
                            </NavLink>
                            <hr />
                        </>
                    )}
                    <p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out' onClick={()=>auth.signOut()} >Sign Out</p>
                    </motion.div>
                )}
            </div>
        </header>
    )
}
