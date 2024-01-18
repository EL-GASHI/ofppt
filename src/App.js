import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'
import { Home, Night, Schedule, Sector, Skills, Contact, Result } from './pages/index'
const App = () => {
  return (
    <BrowserRouter>
          <div className='flex items-center flex-col'>
            <Header/>
            <Container>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/filliers' element={<Sector/>}/>
                <Route path='/formation-qualifiante' element={<Skills/>}/>
                <Route path='/cour-de-soir' element={<Night/>}/>
                <Route path='/emplio-du-temp' element={<Schedule/>}/>
                <Route path='/résultat' element={<Result/>}/>
                <Route path='/contact' element={<Contact/>}/>
              </Routes>
            </Container>
            <Footer/>
          </div>
    </BrowserRouter>
  )
}

export default App

