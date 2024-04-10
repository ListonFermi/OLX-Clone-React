import React, { useContext, useEffect } from 'react';
import './View.css';
import { PostContext } from '../../Store/PostContext';

function View() {
  const { postDetails } = useContext(PostContext)
  console.log(postDetails)

  const { imageURLs, description, location, name, price } = postDetails

  return (
    <>
      <div className="viewParentDiv">
        <div className="imageShowDiv">
          <img src={imageURLs?.length ? imageURLs : ''} alt="" />
        </div>
        <div className="rightSection">
          <div className="productDetails">
            <p>&#x20B9; {price} </p>
            <span>{name}</span>
            <p>{description}</p>
            <span>Tue May 04 2021</span>
          </div>
          <div className="contactDetails">
            <p>Seller details</p>
            <p>No name</p>
            <p>1234567890</p>
          </div>
        </div>
      </div>
      <div className="imgs-container">
        {imageURLs?.map((imgURL, i) => <img className='otherImages' src={imgURL} key={i} alt="" />)}
      </div>
    </>
  )
}

export default View;