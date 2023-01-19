import React from 'react'
import DogCard from './DogCard'
import NavBar from './NavBar'
import UserSignUpPage from './UserSignUpPage'
import { Route, Switch } from 'react-router-dom'


function HomePage() {
  return (
    <div>
        <header>Fetch</header>
       <NavBar />
       {/* <DogCard /> */}
        {/* <UserSignUpPage /> */}
    </div>
  )
}

export default HomePage