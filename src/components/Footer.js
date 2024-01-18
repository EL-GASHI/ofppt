import React from 'react'
import { Link } from 'react-router-dom'
import FooterItemHead from './common/FooterItemHead'
import FooterLink from './common/FooterLink'
import FooterItem from './common/FooterItem'
/* 
Azemmor
Al Massira
Jorf Lasfer
Houzia
Safi
*/
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <footer className='w-4/5 mt-5 pt-5 border-t'>
            <div className='flex '>
                <FooterItem>
                    <FooterItemHead>
                        Lien Rapide
                    </FooterItemHead>
                    <ul className=''>
                        <FooterLink>
                            <Link to="/">Accueil</Link>
                        </FooterLink>
                        <FooterLink>
                            <Link to="/filliers">Filliers</Link>
                        </FooterLink>
                        <FooterLink>
                            <Link to="/formation-qualifiante">Formation Qualifiante</Link>
                        </FooterLink>
                        <FooterLink>
                            <Link to="/cour-de-soir">Cour Du Soir</Link>
                        </FooterLink>
                        <FooterLink>
                            <Link to="/emplio-du-temp">Emploi Du Temp</Link>
                        </FooterLink>
                        <FooterLink>
                            <Link to="/résultat">Résultat</Link>
                        </FooterLink>
                        <FooterLink>
                            <Link to="/contact">Contact</Link>
                        </FooterLink>
                    </ul>
                </FooterItem>
                <FooterItem>
                    <FooterItemHead>
                        Autre Institut
                    </FooterItemHead>
                    <ul>
                        <FooterLink>
                            <a href='https://www.ofppt.ma/'>Azemmor</a>
                        </FooterLink>
                        <FooterLink>
                            <a href='https://www.ofppt.ma/'>Al Massira</a>
                        </FooterLink>
                        <FooterLink>
                            <a href='https://www.ofppt.ma/'>Jorf Lasfer</a>
                        </FooterLink>
                        <FooterLink>
                            <a href='https://www.ofppt.ma/'>Houzia</a>
                        </FooterLink>
                        <FooterLink>
                            <a href='https://www.ofppt.ma/'>Safi</a>
                        </FooterLink>
                    </ul>
                </FooterItem>
                <FooterItem>
                    <FooterItemHead>
                        Référence
                    </FooterItemHead>
                    <ul>
                        <FooterLink>
                            <a href='https://www.ofppt.ma/'>Ofppt Officiel</a>
                        </FooterLink>
                        <FooterLink>
                            <a href='https://www.ofppt.ma/'>My Way</a>
                        </FooterLink>
                        <FooterLink>
                            <a href='https://www.ofppt.ma/'>CMC</a>
                        </FooterLink>
                        <FooterLink>
                            <a href='https://www.ofppt.ma/'>Gouvernement</a>
                        </FooterLink>
                        <FooterLink>
                            <a href='https://www.ofppt.ma/'>Massar</a>
                        </FooterLink>
                        <FooterLink>
                            <a href='https://www.ofppt.ma/'>Motamadriss</a>
                        </FooterLink>
                    </ul>
                </FooterItem>
                <div>
                    <FooterItemHead>
                        ISTA Cite de l'air
                    </FooterItemHead>
                    <p className='text-xl font-bold mb-3'>
                        Nous serons heureux d'entendre vos problèmes,vos<br/> 
                        exigences et vos plaintes
                    </p>
                    <input type='text' className='w-72 h-8 mr-2 pl-2 border border-slate-300 rounded-sm focus:outline-none'/>
                    <button className='text-lg font-black bg-slate-700 text-white rounded-sm h-8 px-5  ' >Envoyee</button>
                </div>
            </div>
            <div className=' my-5 pt-5 flex justify-between border-t'>
                <div className='h-9 flex gap-3 text-xl text-gray-400'>
                    <a href='http/maroc.com'><i className="hover:text-slate-700 hover:scale-125 duration-300 cursor-pointer fa-brands fa-x-twitter"></i></a>
                    <a href='http/maroc.com'><i className="hover:text-slate-700 hover:scale-125 duration-300 cursor-pointer fa-brands fa-telegram"></i></a>
                    <a href='http/maroc.com'><i className="hover:text-slate-700 hover:scale-125 duration-300 cursor-pointer fa-brands fa-microsoft"></i></a>
                </div>
                <div className='text-lg font-black'>
                    <i class="fa-regular fa-copyright"></i> <span className='text-slate-700'>{year}</span>  All Right Reserver ISTA Cite de L'air
                </div>
            </div>

        </footer>
    )
}

export default Footer
