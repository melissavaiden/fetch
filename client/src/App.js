import React, {useEffect, useState} from 'react';
import './App.css';
import SignInPage from './components/SignInPage';
import HomePage from './components/HomePage';
import { Route, Routes} from 'react-router-dom'
import UserSignUpPage from './components/UserSignUpPage';
import Favorites from './components/Favorites';
import NewDog from './components/NewDog';
import MyPups from './components/MyPups';

function App() {
  const [user, setUser] = useState({dogs: []})
  const [errors, setErrors] = useState('')

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
      else
        setErrors('Error')

    });
  }, []);

  return (
    <>
    <div className='display-1' id='page_title'>FETCH</div>
      <Routes>
        <Route path='homepage' element={<HomePage user={user} setUser={setUser}/>}></Route>
        <Route path='/' element={<SignInPage setUser={setUser} user={user}/>}></Route>
        <Route path='/user_sign_up' element={<UserSignUpPage setUser={setUser}/>}></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
        <Route path='/newdog' element={<NewDog user={user}/>}></Route>
        <Route path='/mydogs' element={<MyPups userDogs={user.dogs}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
