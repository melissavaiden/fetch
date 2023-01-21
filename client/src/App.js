import React, {useEffect, useState} from 'react';
import './App.css';
import SignInPage from './components/SignInPage';
import HomePage from './components/HomePage';
import { Route, Routes, NavLink } from 'react-router-dom'
import UserSignUpPage from './components/UserSignUpPage';

function App() {
  const [dogs, setDogs] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/dogs")
    .then((r) => r.json())
    .then((dog) => setDogs(dog))
  },[])

  return (
    <>
    <NavLink to='/homepage' className='display-1'>FETCH</NavLink>
      <Routes>
        <Route path='signup' element={<UserSignUpPage />}></Route>
        <Route path='homepage' element={<HomePage dogs={dogs}/>}></Route>
        <Route path='/' element={<SignInPage />}></Route>
        <Route path='/user_sign_up' element={<UserSignUpPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
