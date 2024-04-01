import React from 'react'
import './OneProduct.css'

function OneProduct({prop}) {
  const {price,name,description, location, date} = prop
  
  return (
    <div className='product'>
      <div className="img-container">
        <img src="/car1.jpeg" alt="" />
      </div>
      <div className='text-container'>
        <h1 className="product-cost">₹{price}</h1>
        <h2 className='product-name'>{name}</h2>
        <h3 className='product-description'>{description}</h3>
        <div className="last-line">
          <p className="product-location">{location}</p>
          <p className="product-date">{date}</p>
        </div>
      </div>
    </div>
  )
}

export default OneProduct
