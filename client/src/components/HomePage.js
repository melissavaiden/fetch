import React, { useState, useEffect } from 'react'
import DogCard from './DogCard'
import NavBar from './NavBar'


function HomePage({user, setUser}) {
  const [dogs, setDogs] = useState([])

      useEffect(() => {
        fetch("/dogs")
        .then((r) => r.json())
        .then((dog) => setDogs(dog))
    },[])

  return (
    <div>
       <NavBar setUser={setUser} user={user}/>
       <h1>Hello {user.username}!</h1>
       <DogCard dogs={dogs}/>
    </div>
  )
}

export default HomePage