import React, {useEffect, useState} from 'react';
import './App.css';
import SignInPage from './components/SignInPage';
import HomePage from './components/HomePage';
import { Route, Routes} from 'react-router-dom'
import UserSignUpPage from './components/UserSignUpPage';
import Favorites from './components/Favorites';
import NewDog from './components/NewDog';
import MyPups from './components/MyPups';
import EditDog from './components/EditDog';

function App() {
  const [user, setUser] = useState({dogs: []})
  const [editDog, setEditDog] = useState(null)
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

  function handleDeleteDog(deletedDogId) {
    const updatedList = user.dogs.filter((dog) => deletedDogId !== dog.id)
    console.log(updatedList)
    setUser(updatedList)
  }

  function handleNewDog(newDog) {
    const addNewDog = user.dogs.push(newDog)
      setUser(addNewDog)
    }

  function updateDog(updatedDog) {
      setEditDog(updatedDog)
  }

  

  return (
    <>
    <div className='display-1' id='page_title'>FETCH</div>
      <Routes>
        <Route path='homepage' element={<HomePage user={user} setUser={setUser}/>}></Route>
        <Route path='/' element={<SignInPage setUser={setUser} user={user}/>}></Route>
        <Route path='/user_sign_up' element={<UserSignUpPage setUser={setUser}/>}></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
        <Route path='/newdog' element={<NewDog user={user} handleNewDog={handleNewDog}/>}></Route>
        <Route path='/mydogs' element={<MyPups userDogs={user.dogs} handleDeleteDog={handleDeleteDog} updateDog={updateDog}/>}></Route>
        <Route path='/updateDog' element={<EditDog editDog={editDog}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
