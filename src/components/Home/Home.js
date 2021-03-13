import React from 'react'
import SearchBox from './SearchBox'

export const Home = () => {
  return (
    <div className='tc'>
      <SearchBox searchChange = {this.onSearchChange} />
    </div>
  )
}

export default Home
