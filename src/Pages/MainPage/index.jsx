import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>MainPage</h1>
      <p onClick={() => navigate('/random-color-generator')}>RandomColor Generator</p>
      <p onClick={() => navigate('/star-rating')}>Star Rating</p>
      <p onClick={() => navigate('/use-outside-click')}>Click Outside Hook</p>
      
    </div>

  )
}

export default MainPage