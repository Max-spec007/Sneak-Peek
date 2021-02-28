import React from 'react'
import SearchBox from './SearchBox'

export const Home = () => {
  return (
    <div className='home'>
      <div className='tc'>
        <SearchBox searchChange = {this.onSearchChange} />
      </div>
    </div>
  )
}

export default Home
