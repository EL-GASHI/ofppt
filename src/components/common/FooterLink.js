import React from 'react'

const FooterLink = (props) => {
    return (
        <li className='text-gray-400 text-base font-bold ml-3 duration-300 hover:text-slate-700 '>
            <i class="fa-solid fa-angle-right mr-3 text-xs "></i>{props.children}
        </li>
    )
}

export default FooterLink
