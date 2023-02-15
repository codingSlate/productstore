import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Item from '../../Components/item/Item'
import { FakeStoreAPI } from '../../services/fake-store-api'
import './Product.css'
const Product = () => {
  const [product, setProduct] = useState(FakeStoreAPI.fetchAllProducts)
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()


  useEffect(() => {
    setLoading(true)

    const productById = async () => {
      const product = await FakeStoreAPI.fetchProductById(productId)
      setProduct(product)
      setLoading(false)
      console.log(product)
    }
    productById().catch(console.error)

  }, [productId])

  function addToCart() {

  }

  if(!loading && !product){
    return(<div>Product not found. Go back to <Link to='/' replace>Home</Link>{" "} ok</div>)
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
      <p>Add to cart</p>
    </>
    }
    </>
  )
}

export { Product }
