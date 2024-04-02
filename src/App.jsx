import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SignupPage from './Pages/SignupPage';
import ViewPost from './Pages/ViewPost';
import { useContext, useEffect, useState } from 'react';
import { FirebaseContext, AuthContext } from './Store/Context';
import { getAuth, onAuthStateChanged, } from "firebase/auth";
import CreatePage from './Pages/CreatePage';
import Post from './Store/PostContext';

function App() {

  const [user, setUser] = useState('hello')
  const firebase = useContext(FirebaseContext)
  const auth = getAuth(firebase)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
      console.log('auth state changed')
    }, [])
  })

  return (
    <Post>
      <AuthContext.Provider value={user}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/viewPost' element={<ViewPost />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/createPost' element={<CreatePage />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </Post>
  )
}

export default App
