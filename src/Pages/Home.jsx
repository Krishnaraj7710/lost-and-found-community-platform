import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import SearchBar from '../Components/SearchBar'
import Itemcard from '../Components/Itemcard'


function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBar />
      <Itemcard />
      
    </div>
  )
}

export default Home
