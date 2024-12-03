import React from 'react'
import './Review.scss'

const Review = () => {
  return (
    <>
    <section className="review">
        <div className="container">
            <div className="review__wrapper">
                <div className="review__text">
                <h1>OUR HAPPY CUSTOMERS</h1>
                <h3>← →</h3>
                </div>
                <div className='div__review'>
                    <div>
                        <h3>⭐⭐⭐⭐⭐</h3>
                        <h2>Sarah M.✅</h2>
                        <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                    <div>
                        <h3>⭐⭐⭐⭐⭐</h3>
                        <h2>Alex K.✅</h2>
                        <p>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                    </div>
                    <div>
                        <h3>⭐⭐⭐⭐⭐</h3>
                        <h2>James L.✅</h2>
                        <p>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Review