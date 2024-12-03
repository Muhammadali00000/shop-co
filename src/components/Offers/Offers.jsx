import React from 'react'
import './Offers.scss'

const Offers = () => {
  return (
    <>
    <section className="offers">
        <div className="container">
            <div className="offers__wrapp">
                <div className="offers__wrapper">
                    <div>
                        <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                    </div>
                    <div className='offer_login'>
                        <input className='off_email' placeholder='✉️Enter your email address' type="text" />
                        <button>Subscribe to Newsletter</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Offers