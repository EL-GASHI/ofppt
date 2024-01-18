import React from 'react'
import { Link } from 'react-router-dom'
import ofppt from '../imgs/logo-ofppt.png'
import Nav from './common/Nav'

const Header = () => {
    return (
        <header className='flex w-4/5  items-center justify-between h-20  border-b border-gray-300'>
            <Link to='/'><img src={ofppt} alt='ofppt' className='w-20 cursor-pointer'/></Link>
            <Nav/>
            <button className='text-lg bg-slate-700 text-white rounded-full px-4 py-1 flex items-center'>Paramètr <i class="fa-solid fa-gears ml-1"></i></button>
        </header>
    )
}

export default Header
