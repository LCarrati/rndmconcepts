import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './styles.css'
import { useNavigate } from 'react-router-dom'

const StarRating = ({ numberOfStars = 10 }) => {
    const [rating, setRating] = useState(0)
    const [hoverRating, setHoverRating] = useState(0)
    const navigate = useNavigate();

    return (
        <div className='starRating'>
            <button className='button' onClick={() => navigate('/')}>Return to previous page</button>
            <h1>StarRating</h1>
            <div>
            {[...Array(numberOfStars)].map((star, i) => {
                const index = i + 1; //importante!!
                return (
                    <FaStar
                        key={index}
                        className='star'
                        size={24}
                        color={(index <= (hoverRating || rating)) ? "#ffc107" : "#161618"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHoverRating(index)}
                        onMouseLeave={() => setHoverRating(rating)}
                    />
                )
            })}
            </div>
        </div>
    )
}

export default StarRating