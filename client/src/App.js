import React, {useEffect, useState} from 'react';
import './App.css';
import SignInPage from './components/SignInPage';
import HomePage from './components/HomePage';
import { Route, Routes, NavLink } from 'react-router-dom'
import UserSignUpPage from './components/UserSignUpPage';
import Favorites from './components/Favorites';
import NewDog from './components/NewDog';
import MyPups from './components/MyPups';

function App() {
  const [user, setUser] = useState(null)


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  console.log(user)

  return (
    <>
    <NavLink to='/homepage' className='display-1'>FETCH</NavLink>
      <Routes>
        <Route path='homepage' element={<HomePage />}></Route>
        <Route path='/' element={<SignInPage setUser={setUser}/>}></Route>
        <Route path='/user_sign_up' element={<UserSignUpPage />}></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
        <Route path='/newdog' element={<NewDog />}></Route>
        <Route path='/mydogs' element={<MyPups />}></Route>



      </Routes>
    </>
  );
}

export default App;
