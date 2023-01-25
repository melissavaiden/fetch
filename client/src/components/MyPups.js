import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'

function MyPups() {
    const [myDogs, setMyDogs] = useState([])

    // useEffect(() => {
    //     fetch(`/${}`)
    //     .then((r) => r.json())
    //     .then((dog) => setMyDogs(dog))
    // },[])
    
  return (
    <div>
      <NavBar />
      <div>MyPups</div>
    </div>
  )
}

export default MyPups