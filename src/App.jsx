import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sale from './pages/Sale'
import SinglePage from './pages/SinglePage'
import SingupPage from './pages/SingupPage'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer/Footer'
import Offers from './components/Offers/Offers'
import Basket from './components/Basket/Basket'
import CatalogPage from './pages/CatalogPage'

const App = () => {
  return (
    <>

    <Header/>



    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sale' element={<Sale/>} />

      <Route path='/product/:id' element={<SinglePage/>}/>
      <Route path='/signup' element={<SingupPage/>}  /> 
      <Route path='/login' element={<LoginPage/>}  /> 
      <Route path='/basket' element={<Basket/>} />
      <Route path='/catalog' element={<CatalogPage/>} />
      
    </Routes>
    <Offers/>
    <Footer/>
    </>
    )
}

export default App