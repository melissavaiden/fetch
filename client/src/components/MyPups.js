import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'

function MyPups() {
    const [myDogs, setMyDogs] = useState([])

    useEffect(() => {
        fetch('/mypups')
        .then((r) => r.json())
        .then((dog) => setMyDogs(dog))
    },[])

    console.log(myDogs)

    // let dogs = myDogs.map((dog) => {
    //   return (
    //     <div key={dog.id} className='card'>
    //       <div className='card-body'>
    //       <img className='card-img-top' alt='dog' src={dog.picture_url}></img>
    //       <h1 className='card-title'>{dog.name}</h1>
    //       <div className='card-subtitle'>{dog.age}</div>
    //       <button className='btn btn-primary'>Add to Favorites</button>
    //       <button className='btn btn-primary'>Hide</button>
    //       </div>
    //     </div>
    //   )
    // })

    
  return (
    <div>
      <NavBar />
      {/* {dogs} */}
    </div>
  )
}

export default MyPups