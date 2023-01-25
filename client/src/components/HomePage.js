import React, { useState, useEffect } from 'react'
import DogCard from './DogCard'
import NavBar from './NavBar'


function HomePage({user, setUser}) {
  const [dogs, setDogs] = useState([])

      useEffect(() => {
        fetch("http://localhost:3000/dogs")
        .then((r) => r.json())
        .then((dog) => setDogs(dog))
    },[])

    console.log(user.username)

  return (
    <div>
       <NavBar setUser={setUser}/>
       <div>Hello {user.username}</div>
       <DogCard dogs={dogs}/>
    </div>
  )
}

export default HomePage