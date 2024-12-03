import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <>
    <section className='footer'>
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__wrapp">
                    <div className="footer__box">
                        <h1>SHOP.CO</h1>
                        <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        <div className="app">
                            <img src="./app-1.png" alt="" />
                            <img src="./app-2.png" alt="" />
                            <img src="./app-3.png" alt="" />
                            <img src="./app-4.png" alt="" />
                        </div>
                    </div>
                    <div className="footer__box">
                        <h2>Company</h2>
                        <p>About</p>
                        <p>Features</p>
                        <p>Works</p>
                        <p>Career</p>
                    </div>
                    <div className="footer__box">
                        <h2>Help</h2>
                        <p>Customer Support</p>
                        <p>Delivery Details</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="footer__box">
                        <h2>FAQ</h2>
                        <p>Account</p>
                        <p>Manage Deliveries</p>
                        <p>Orders</p>
                        <p>Payments</p>
                    </div>
                    <div className="footer__box">
                        <h2>Resources</h2>
                        <p>Free eBooks</p>
                        <p>Development Tutorial</p>
                        <p>How to - Blog</p>
                        <p>Youtube Playlist</p>
                    </div>
                </div>
                <br />
                <hr />

                <div className="footer__card">
                    <div>
                        <h3>Shop.co © 2000-2023, All Rights Reserved</h3>
                    </div>

                    <div>
                        <img src="./visa.svg" alt="" />
                        <img src="./master-card.svg" alt="" />
                        <img src="./pay-pal" alt="" />
                        <img src="./apple-pay.svg" alt="" />
                        <img src="./g-pay.svg" alt="" />
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
)
}

export default Footer