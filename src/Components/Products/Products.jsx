import React from 'react'
import './Products.css'
import OneProduct from './OneProduct'

function Products() {

  const product = {
    price: '10,00,000',
    name: 'WagonR',
    description: '2018 Model- 22000KMs',
    location: 'RAM NAGAR, COIMBATORE',
    date: 'APR 01'
  }


  return (
    <div className='products-section'>
      <OneProduct prop={product} />
    </div>
  )
}

export default Products
