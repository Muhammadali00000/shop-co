import React from 'react'
import './Also.scss'
import Card from '../Card/Card'

const Also = () => {
  return (
    <>
    <section className="also">
        <div className="container">
            <div className="also_wrapper">

                <h1>You might also like</h1>

                <div className="also-card">
            <Card image={'/also-1.png'} name='Polo with Contrast Trims' rate='4.0' price='212' stars="⭐⭐⭐⭐" />
                <Card image={'/also-2.png'} name='Gradient Graphic T-shirt' rate='4.0' price='145' stars="⭐⭐⭐⭐" />
                <Card image={'/also-3.png'} name='Polo with Tipping Details' rate='3.0' price='180' stars="⭐⭐⭐" />
                <Card image={'/also-4.png'} name='Black Striped T-shirt' rate='4.5' price='120' stars="⭐⭐⭐⭐" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Also