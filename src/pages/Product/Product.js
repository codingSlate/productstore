import React, { useEffect, useState } from 'react'
import Item from '../../Components/item/Item'
import {FakeStoreAPI} from '../../services/fake-store-api'
const Product = () => {
  const [data, setData] = useState(FakeStoreAPI.fetchAllProducts)

  useEffect(()=>{

  })

  function addToCart(){

  }
  return (
    <>
        <div>Single Product</div>
        <Item data={data} addToCart={addToCart}/>
    </>
  )
}

export {Product}
