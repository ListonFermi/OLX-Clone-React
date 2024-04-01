import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { firebaseApp } from '../firebase.config';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products'
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return(
    <>
      <Header/>
      <Products />
      <Footer/>
    </>
  ) 
}

export default App
