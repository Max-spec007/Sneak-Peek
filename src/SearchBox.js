import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        type='search'
        placeholder='search shoes'
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox
