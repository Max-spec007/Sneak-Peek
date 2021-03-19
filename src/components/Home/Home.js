import React from 'react'

export const Home = ({ onSearchChange }) => {
  return (
    <div className='tc'>
      <div className='part1'>
        <input
          className='part2'
          type='search'
          placeholder='Search Shoes'
          onChange={onSearchChange}
        />
      </div>
    </div>
  )
}

export default Home
