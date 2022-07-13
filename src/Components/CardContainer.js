import React from 'react'
import CardComponent from './CardComponent'
import "./css/cardContainer.css";


const CardContainer = () => {
  return (
    <div className='flexbox'>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
    </div>
  )
}

export default CardContainer