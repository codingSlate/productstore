import React from 'react'
import { useCart } from '../../Context/cart'
import './Cart.css'

const SHIPPING_CHARGE = 40
const Cart = () => {
  const { cart, incQuantity, decQuantity, removeFromCart } = useCart()
  console.log(cart)

  const cartTotal =()=>{
    return cart.reduce((acc, item)=> acc + item.product.price * item.quantity,0)
  }

  const round =(value, decimals)=>{
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals)
  }



  return (
    <div>
      {cart.length >= 1 ?
        <>
          <div className='container'>
            <h3>Order Summary</h3>
            { cart.map(item=>(
              <div className='item-grid'>
                <div className='img-container'><img src={item.product.image} alt=""/></div>
                <div>
                  <p>{item.product.title}</p>
                  <p>{item.product.price}</p>
                  </div>
                <div>
                  <div>
                    <button onClick={()=>incQuantity(item.product.id)}>+</button>
                    <span>{item.quantity}</span>
                    <button onClick={()=>decQuantity(item.product.id)}>-</button>
                  </div>
                  <button onClick={()=>removeFromCart(item.product.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3>Payment Summary</h3>
            <div  className='price-grid'>
              <div>
                <p>Subtotal</p>
                <p>Shipping Fee</p>
                <p>Total</p>
              </div>
              <div>
                <p>{round(cartTotal(),2)}</p>
                <p>{SHIPPING_CHARGE}</p>
                <p>{round(cartTotal() + SHIPPING_CHARGE ,2)}</p>
              </div>
            </div>
          </div>
        </> :
        <div>Cart is Empty</div>
      }

    </div>
  )
}

export { Cart }
