import React, { useEffect, useContext, useState } from 'react'
import './Products.css'
import OneProduct from './OneProduct'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { FirebaseContext } from "../../Store/Context";

function Products() {
  const firebase = useContext(FirebaseContext)
  const [productsData, setProductsData] = useState(null)

  
  async function getProductsData() {
    try {
      const db = getFirestore(firebase);
      const snapshot = await getDocs(collection(db, "products"));
      const productsData = snapshot.docs.map(product => product.data())
      setProductsData(productsData)
      console.log(productsData)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => { getProductsData() }, [])
  // const product = {
  //   price: '10,00,000',
  //   name: 'WagonR',
  //   description: '2018 Model- 22000KMs',
  //   location: 'RAM NAGAR, COIMBATORE',
  //   date: 'APR 01'
  // }


  return (
    <div className='products-section'>
      {productsData?.map((product,index)=><OneProduct prop={product} key={index }  />)}
    </div>
  )
}

export default Products
