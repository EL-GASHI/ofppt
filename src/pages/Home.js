import React from 'react'
import Span from '../components/common/Span'
const Home = () => {
  return (
    <section>
      <div className='text-center '>
        <h1 className='text-6xl mt-9'>ISTA <Span>Cite de l'air</Span> El-jadida &#128150;</h1>
        <q className='text-4xl mt-4'>Votre chemin vers un avenir meilleur</q>
        <p className='text-2xl mt-3 '>
        Nous pouvons dire que c’est votre premier pas pour construire votre avenir, car<br/>
        c’est effectivement le cas. Cet institut a été construit en <Span>2006</Span>, pour être la porte d’entrée<br/>
        des jeunes vers le marché du travail, dans le cadre de <Span>la future vision royale</Span>.<br/>
        <br/>
        Nous avons diplômé <Span>1200</Span> stagiaires d’ici <Span>2022</Span> dans divers domaines.<br/>
        <br/>
        La capacité de notre bureau est passée de <Span>1.400 </Span>places en <Span>2000</Span> à <Span>2000</Span> places dans<br/>
        plusieurs domaines au cours de l'année <Span>2023</Span>, et cela a été suivi par la restauration de ses<br/>
        installations et la modernisation de ses équipements, ce qui aidera les stagiaires à étudier<br/>
        dans une excellente ambiance d'étude.
        </p>
        <button className='text-2xl bg-sky-700 text-white my-7  px-8 py-2 rounded-md duration-500  hover:rounded-[50px] '>Inscription</button>
      </div>
    </section>
  )
}

export default Home
