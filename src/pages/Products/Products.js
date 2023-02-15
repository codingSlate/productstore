import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Item from '../../Components/item/Item'
import { FakeStoreAPI } from '../../services/fake-store-api'
import './Products.css'

const Products = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [queryPath, setQueryPath] = useSearchParams() // get/set URL param
  const searchQry = queryPath.get('q')

  useEffect(()=>{
    const fetchProducts = async () =>{
      setLoading(true)
      const products = searchQry ?  
      await FakeStoreAPI.fetchProductBySearchQuery(searchQry) :
      await FakeStoreAPI.fetchAllProducts()
      setProducts(products)
      setLoading(false)
      console.log(products)
    }
    fetchProducts().catch(console.error)

  },[searchQry])

  if(!loading && !products.length && searchQry ){
    return(
      <div>No matching product "{searchQry}" found</div>
    )
  }

  function addToCart(){}

  return (
    <>
        <div>All Products</div>
        {
          loading ? <div>Loading...</div> :
          <div className='grid'>
          {
            products.map((product)=> <Item key={product.id} data={product} addToCart={addToCart}/>)
          }
          </div>
        }
    </>
  )
}

export {Products}
