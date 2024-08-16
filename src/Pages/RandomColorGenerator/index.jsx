import React, { useState } from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom';

const RandomColorGenerator = () => {
  const [dynamicColor, setDynamicColor] = useState('#000')
  const navigate = useNavigate();

  const generateRandomColor = () => {
    let possibleValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += possibleValues[Math.floor(Math.random() * possibleValues.length)]
    }
    // Gera um número entre 0 e 1 (inclusive) e multiplica pelo tamanho do array possibleValues, gerando assim um número entre 0 e array.length (inclusive). Depois arredonda para baixo com o Math.floor e encontra um valor que será o i-esimo elemento do array. Faz isso 6 vezes gerando os valores hexadecimais.

    setDynamicColor(color)
  }

  return (
    <div className='pageColor'  style={{ "--color": dynamicColor }}>
      <button className='button' onClick={() => navigate('/')}>Return to previous page</button>
      <h1>Random color generator</h1>
      <button className='button' onClick={() => generateRandomColor()}>Generate random color</button>
      <h2>Color generated is: {dynamicColor}</h2>
    </div>
  )
}

export default RandomColorGenerator