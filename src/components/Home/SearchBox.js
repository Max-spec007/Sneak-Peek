import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='part1'>
      <input
        className='part2'
        type='search'
        placeholder='Search Shoes'
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox
