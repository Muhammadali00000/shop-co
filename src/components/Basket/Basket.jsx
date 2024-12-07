import React from 'react'
import './Basket.scss'

const Basket = () => {
  return (
   <>
   <section className="basket">
    <div className="container">
        <div className="basket__wrapper">
            <h1>YOUR CART</h1>
            <div className="basket__wrapp">
            <div className="basket__box">
                <div className="basket-card">
                <div className="basket-img">
                    <div>
                        <img src="/basket-1.png" alt="" />
                    </div>
                    <div className='basket-text'>
                        <h3>Gradient Graphic T-shirt</h3>
                        <p>Size: Large</p>
                        <p>Color: White</p>
                        <h2>$145</h2>
                    </div>
                </div>
                <div className="basket-btn">
                    <button className='btn-1'>🗑️</button>
                    <button className='btn-2'>- 1 +</button>
                </div>
                </div>
                <hr />
                <div className="basket-card">
                <div className="basket-img">
                    <div>
                        <img src="/basket-2.png" alt="" />
                    </div>
                    <div className='basket-text'>
                        <h3>Gradient Graphic T-shirt</h3>
                        <p>Size: Large</p>
                        <p>Color: White</p>
                        <h2>$145</h2>
                    </div>
                </div>
                <div className="basket-btn">
                    <button className='btn-1'>🗑️</button>
                    <button className='btn-2'>- 1 +</button>
                </div>
                </div>
                <hr />
                <div className="basket-card">
                <div className="basket-img">
                    <div>
                        <img src="/basket-3.png" alt="" />
                    </div>
                    <div className='basket-text'>
                        <h3>Gradient Graphic T-shirt</h3>
                        <p>Size: Large</p>
                        <p>Color: White</p>
                        <h2>$145</h2>
                    </div>
                </div>
                <div className="basket-btn">
                    <button className='btn-1'>🗑️</button>
                    <button className='btn-2'>- 1 +</button>
                </div>
                </div>
            </div>

            <div className="order-summary">
                <h2>Order Summary</h2>
                <p>Subtotal: <span>$565</span></p>
                <p>Discount (-20%): <span className="discount">-$113</span></p>
                <p>Delivery Fee: <span>$15</span></p>
            <hr />
                <h3>Total: <span>$467</span></h3>
                <div>
                    <input placeholder='🎟️Add promo code' type="text" />
                    <button>Apply</button>
                </div>
                <button className="checkout">Go to Checkout →</button>
            </div>
            </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default Basket