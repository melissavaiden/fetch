import React, { useState, useEffect } from 'react'
import DogCard from './DogCard'
import NavBar from './NavBar'


function HomePage() {
  const [dogs, setDogs] = useState([])

      useEffect(() => {
        fetch("http://localhost:3000/dogs")
        .then((r) => r.json())
        .then((dog) => setDogs(dog))
    },[])

  return (
    <div>
       <NavBar />
       <DogCard dogs={dogs}/>
    </div>
  )
}

export default HomePage