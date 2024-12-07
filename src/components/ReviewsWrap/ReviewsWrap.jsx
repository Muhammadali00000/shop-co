import React from 'react'
import './ReviewsWrap.scss'
import ReviewCard from '../ReviewCard/ReviewCard'

import ReviewsData from './reviews.json'

const ReviewsWrap = ({ card }) => {
  return (
    <>
    <section className="reviewswrap">
        <div className="container">
            <div className="reviews__wrapper">

                {ReviewsData.map(card => (
                    <>
                    <ReviewCard key={card.id} card={card} />
                    </>
                ))}

              
            </div>
        </div>
    </section>
    </>
  )
}

export default ReviewsWrap