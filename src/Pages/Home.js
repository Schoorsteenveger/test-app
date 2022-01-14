import React from 'react'
import SearchBar from '../Components/SearchBar/SearchBar'
import './Home.css'



function Home({ message }) {

    console.log(message)

    return (
        <div className='home'>
            <h1>Home opdrachten</h1>
            <SearchBar />
        </div>
    )
}

export default Home
