import React, { useContext, useState } from "react";
import "./Create.css";
import { AuthContext, FirebaseContext } from "../../Store/Context";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function CreatePost() {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')
  const [images, setImages] = useState([])
  const firebase = useContext(FirebaseContext)
  const user = useContext(AuthContext)
  const navigate = useNavigate()

  async function submitHandler(e) {
    try {
      e.preventDefault()

      const storage = getStorage(firebase);
      const storageRef = ref(storage)
      const imageURLs = []
      let imageRef, imgURL

      //Uploading each blob files in the images state to the 'firebase storage'
      for (let image of images) {
        imageRef = ref(storageRef, `images/${image.lastModifiedDate}`)
        await uploadBytes(imageRef, image)
        imgURL = await getDownloadURL(imageRef) //Getting the downloadURL of the uploaded image
        imageURLs.push(imgURL)
      }

      const { uid } = user
      const data = { name, description, location, price, imageURLs, userId: uid , date: new Date().toISOString() } //doc to be stored in the 'firebase firestore'

      const db = getFirestore(firebase);
      await addDoc(collection(db, "products"), data) //adding the doc to the 'firebase firestore'
      navigate('/')

    } catch (error) {
      console.log(error)
    }

  }

  function imagesHandler(e) {
    const imagesArray = [...e.target.files]
    console.log(imagesArray)
    setImages(imagesArray)
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" defaultValue="WagonR" onChange={(e) => setName(e.target.value)} />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" defaultValue="2015 Model- 22000KMs" onChange={(e) => setDescription(e.target.value)} />
        <label htmlFor="location">Location</label>
        <input type="text" id="location" name="location" defaultValue="Ram Nagar, Coimbatore" onChange={(e) => setLocation(e.target.value)} />
        <label htmlFor="price">Price</label>
        <input type="number" id="price" name="price" defaultValue="15,00,000" onChange={(e) => setPrice(e.target.value)} />
        <input type="file" accept="image/*" multiple onChange={imagesHandler} />
        {images?.map((image, index) => {
          return <img key={index} width="200px" height="200px" src={URL.createObjectURL(image)} ></img>
        })}
        <button className="uploadBtn">Upload & Submit</button>
      </form>
    </>
  );
};

export default CreatePost;
