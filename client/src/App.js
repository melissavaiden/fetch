import React, {useEffect, useState} from 'react';
import './App.css';
import SignInPage from './components/SignInPage';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom'
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
      <Routes>
        <Route path='signup' element={<UserSignUpPage />}></Route>
        <Route path='homepage' element={<HomePage dogs={dogs}/>}></Route>
        <Route path='/' element={<SignInPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
