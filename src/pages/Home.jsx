import React from 'react'
import Hero from '../components/Hero/Hero'
import Category from '../components/Category/Category'
import Browse from '../components/Browse/Browse'
import Review from '../components/Review/Review'
import Offers from '../components/Offers/Offers'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <Category/>
    <Browse/>
    <Review/>
    <Offers/>
    <Footer/>
    </>
    )
}

export default Home