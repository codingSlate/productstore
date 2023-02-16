import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FakeStoreAPI } from '../../services/fake-store-api'
import './Product.css'
import { useCart } from '../../Context/cart' 
const Product = () => {
  const [product, setProduct] = useState(FakeStoreAPI.fetchAllProducts)
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()
  const {addToCart} = useCart()


  useEffect(() => {
    setLoading(true)

    const productById = async () => {
      const product = await FakeStoreAPI.fetchProductById(productId)
      setProduct(product)
      setLoading(false)
      // console.log(product)
    }
    productById().catch(console.error)

  }, [productId])


  if(!loading && !product){
    return(<div>Product not found. Go back to <Link to='/' replace>Home</Link>ok</div>)
  }
  return (
    <>
    {loading ? <div>Loading...</div> :
    <>
      <div>Title :{product.title}</div>
      <div>Price :{product.price}</div>
      <div>Category :{product.category}</div>
      <div>Description: {product.description}</div>
      <img src={product.image} alt="" />
      <button onClick={()=>addToCart(product)}>Add to cart</button>
    </>
    }
    </>
  )
}

export { Product }
