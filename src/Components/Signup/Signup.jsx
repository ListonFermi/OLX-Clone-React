import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import './Signup.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, doc, setDoc, getFirestore } from "firebase/firestore";
import { FirebaseContext } from '../../Store/Context';

function Signup() {

  const firebase = useContext(FirebaseContext)
  const navigate = useNavigate();

  function signupHandler() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        
        // Add a new document with a generated id      
        const db = getFirestore(firebase);
        const newUserRef = doc(collection(db, "users"));
        setDoc(newUserRef, { username: user.displayName })
          .then(() =>{
            console.log('stored in db')
            navigate("/");
          } )
          .catch((error) => console.log(error));


        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }


  return (
    <div className="signup">
      <div className="slider">
        <img src="./loginEntryPointPost.webp" alt="" />
        <h3>Help us become one of the safest places to buy and sell</h3>
      </div>
      <button className='phone' onClick={() => console.log(firebase)}>
        <svg width="22px" height="22px" viewBox="0 0 1024 1024" data-aut-id="icon" class="_2oC8g" fill-rule="evenodd"><path class="rui-w4DG7 _3Z_D3" d="M743.68 85.333l66.987 67.84v701.227l-63.573 84.267h-471.253l-62.507-85.333v-700.373l67.627-67.627h462.72zM708.053 170.667h-391.893l-17.493 17.707v637.653l20.053 27.307h385.92l21.333-27.52v-637.653l-17.92-17.493zM512 682.667c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667c-23.564 0-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667z"></path></svg>
        <span>Continue with phone</span>
      </button>
      <button onClick={signupHandler}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20px" height='20px' viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
        <span>Google Auth</span>
      </button>
    </div>
  )
}

export default Signup
