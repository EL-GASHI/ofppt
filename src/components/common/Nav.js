import React from 'react'
import NavLink from './NavLink'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <nav className='float-end'>
            <ul className='flex gap-x-5'>
            <NavLink>
                <Link to="/">Accueil</Link>
            </NavLink>
            <NavLink>
                <Link to="/filliers">Filliers</Link>
            </NavLink>
            <NavLink>
                <Link to="/formation-qualifiante">Formation Qualifiante</Link>
            </NavLink>
            <NavLink>
                <Link to="/cour-de-soir">Cour Du Soir</Link>
            </NavLink>
            <NavLink>
                <Link to="/emplio-du-temp">Emploi Du Temp</Link>
            </NavLink>
            <NavLink>
                <Link to="/résultat">Résultat</Link>
            </NavLink>
            <NavLink>
                <Link to="/contact">Contact</Link>
            </NavLink>
            </ul>
        </nav>
    )
}
export default Nav
