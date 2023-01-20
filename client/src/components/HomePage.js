import React from 'react'
import DogCard from './DogCard'
import NavBar from './NavBar'


function HomePage({dogs}) {
  return (
    <div>
        <header>Fetch</header>
       <NavBar />
       <DogCard dogs={dogs}/>
    </div>
  )
}

export default HomePage