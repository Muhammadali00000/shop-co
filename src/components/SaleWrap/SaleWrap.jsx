import React from 'react'
import './SaleWrap.scss'

const SaleWrap = () => {
  return (
    <section className="salewrap">
        <div className="container">
            <div className="salewrap__wrap">
                <div className="salewrap__card">
                    <h2>Casual</h2>
                </div>
                <div className="salewrap__card">
                    <h2>Formal</h2>
                </div>
                <div className="salewrap__card">
                    <h2>Part</h2>
                </div>
                <div className="salewrap__card">
                    <h2>Gym</h2>
                </div>
            </div>



            <div className="sel_review">
                <div className='container'> 
            <div className="review__sel">
                <div>
                <h1>OUR HAPPY CUSTOMERS   (491)</h1>
                </div>

                <div>
                    <img src="./Frame.svg" alt="" />
                    <button className='sale_btn1'>Latest</button>
                    <button className='sale_btn2'>Write a Review</button>
                </div>
                </div>
                <div className='div__sel'>
                    <div>
                        <h3>⭐⭐⭐⭐⭐</h3>
                        <h2>Samantha D.✅</h2>
                        <p>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                        <p>Posted on August 14, 2023</p>
                    </div>
                    <div>
                        <h3>⭐⭐⭐⭐</h3>
                        <h2>Ethan R.✅</h2>
                        <p>"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p>
                        <p>Posted on August 16, 2023</p>
                    </div>
                    <div>
                        <h3>⭐⭐⭐</h3>
                        <h2>Liam K.✅</h2>
                        <p>"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>
                        <p>Posted on August 18, 2023</p>
                    </div>
                    <div>
                        <h3>⭐⭐⭐⭐⭐</h3>
                        <h2>Alex M.✅</h2>
                        <p>"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
                        <p>Posted on August 15, 2023</p>
                    </div>
                    <div>
                        <h3>⭐⭐⭐⭐</h3>
                        <h2>Olivia P.✅</h2>
                        <p>"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
                        <p>Posted on August 17, 2023</p>
                    </div>
                    <div>
                        <h3>⭐⭐⭐⭐⭐</h3>
                        <h2>Ava H.✅</h2>
                        <p>"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>
                        <p>Posted on August 19, 2023</p>
                    </div>
                </div>
                <div className='sale_div_btn'>
                <button className='sale_btn3'>Load More Reviews</button>
                </div>
            </div>
                </div>
        </div>
    </section>
  )
}

export default SaleWrap