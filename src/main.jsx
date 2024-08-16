// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import RandomColorGenerator from './Pages/RandomColorGenerator'
import './index.css'
import StarRating from './Pages/StarRating'
import UseOnclickOutsideTest from './Pages/UseOutsideClick'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/random-color-generator" element={<RandomColorGenerator />} />
        <Route path="/star-rating" element={<StarRating />} />
        <Route path="/use-outside-click" element={<UseOnclickOutsideTest />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)