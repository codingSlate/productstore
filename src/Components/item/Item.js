import React from 'react'
import './index'

export default function Item({data, addToCart}) {
    const [id, image, title, price ] = data
  return (
    <div className='card'>
        <div className="card-image">
            <img alt="" src={image}/>
        </div>
        <div className="card-title">{title}</div>
        <div className="card-price">{price}</div>
    </div>
  )
}
