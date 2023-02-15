import React from 'react'
import './Item.css'

export default function Item({data, addToCart}) {
    const {id, image, title, price} = data
  return (
    <div className='card'>
      <div className='card-item' >
        <div className="card-image">
            <img alt="" src={image}/>
        </div>
        <div className="card-title">{title}</div>
        <div className="card-price">
          <span>Price : {price}</span>
          <span>Add</span>
          </div>
      </div>
    </div>
  )
}
