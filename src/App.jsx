import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SignupPage from './Pages/SignupPage';
import { useContext, useEffect, useState } from 'react';
import {  FirebaseContext, AuthContext } from './Store/Context';
import {getAuth, onAuthStateChanged,} from "firebase/auth";


function App() {

  const [user, setUser] = useState('hello')
  const firebase = useContext(FirebaseContext)
  const auth= getAuth(firebase)

  useEffect(() => {
    onAuthStateChanged(auth, (user) =>{
      setUser(user)
      console.log('auth state changed')
    }, [] )
  })

  return (
    <AuthContext.Provider value={user}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
