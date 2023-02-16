import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

export default function Item({data, addToCart}) {
    const {id, image, title, price} = data
  return (
    <div className='card'>
      <div className='card-item' >
        <div className="card-image">
            <img alt="" src={image}/>
        </div>
        <div className="card-title">
          <Link to={`/product/${id}`}>{title}</Link></div>
        <div className="card-price">
          <span>Price : {price}</span>
          <button onClick={()=>addToCart(data)}>Add</button>
          </div>
      </div>
    </div>
  )
}
