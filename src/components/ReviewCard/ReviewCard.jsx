import React from "react";
import './ReviewCard.scss'

const ReviewCard = ({card}) => {
  return (
    <div className="review-card">
      <div>
        <p>⭐⭐⭐⭐</p>
        <img src="/tochki.svg" alt="" />
      </div>
      <h3>{card.user}✅</h3>
      <q>{card.text}</q>
      <b>{card.date}</b>
    </div>
  )
}

export default ReviewCard;
