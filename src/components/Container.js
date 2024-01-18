import React from 'react'

const Container = (props) => {
    return (
        <section className='h-[calc(100vh-80px)]'>
            {props.children}
        </section>
    )
}

export default Container
