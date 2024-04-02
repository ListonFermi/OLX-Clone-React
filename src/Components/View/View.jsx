import React, { useContext } from 'react';
import './View.css';
import {PostContext} from '../../Store/PostContext';

function View() {
  const {postDetails} = useContext(PostContext)
  console.log(postDetails)


  const {imageURLs, description, location, name, price}= postDetails
  return (
    <>
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={imageURLs[0]} alt="" />
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
    <img className='otherImages' src="./car1.jpeg" alt="" />
    </>
  );
}

export default View;