import './App.css';
import SignInPage from './components/SignInPage';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom'
import UserSignUpPage from './components/UserSignUpPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='signup' element={<UserSignUpPage />}></Route>
        <Route path='homepage' element={<HomePage />}></Route>
        <Route path='/' element={<SignInPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
