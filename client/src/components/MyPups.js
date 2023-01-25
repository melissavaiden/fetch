import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'

function MyPups() {
    const [myDogs, setMyDogs] = useState([])

    // useEffect(() => {
    //     fetch("http://localhost:3000/")
    //     .then((r) => r.json())
    //     .then((tag) => setTags(tag))
    // },[])
    
  return (
    <div>
      <NavBar />
      <div>MyPups</div>
    </div>
  )
}

export default MyPups