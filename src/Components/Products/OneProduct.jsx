import React, { useContext } from 'react'
import './OneProduct.css'
import { PostContext } from '../../Store/PostContext'
import { useNavigate } from 'react-router-dom'

function OneProduct({prop}) {
  const {price,name,description, location, date, imageURLs} = prop
  const {setPostDetails } = useContext(PostContext)
  const navigate = useNavigate()

  function clickHandler(){
    setPostDetails(prop)
    navigate('/viewPost')
  }
  
  return (
    <div className='product' onClick={clickHandler}>
      <div className="img-container">
        <img src={imageURLs[0]} alt="" />
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
