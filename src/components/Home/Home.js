import React from 'react'

export const SearchBox = ({ placeholder, searchChange }) => {
  return (
    <div className='tc'>
      <div className='part1'>
        <input
          className='part2'
          type='search'
          placeholder={placeholder}
          onChange={ searchChange }
        />
      </div>
    </div>
  )
}

export default SearchBox
