import React from 'react'

const FooterItemHead = (props) => {
    return (
        <h4 className='font-black text-xl text-slate-700 mb-3'>
            {props.children}
        </h4>
    )
}

export default FooterItemHead
