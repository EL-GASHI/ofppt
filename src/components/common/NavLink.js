import React from 'react'
const NavLink = (props) => {
    return (
        <li className='text-gray-400 text-lg font-black duration-300 hover:text-slate-700 '>
            {props.children}
        </li>
    )
}

export default NavLink
