import React from 'react'
import { NavLink } from 'react-router-dom'
import {logo} from '../assets/img'
import {isActiveStyles, isNoActiveStyles } from '../utils/style'

export default function Header() {
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
        </header>
    )
}
