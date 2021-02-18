import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        type='search'
        placeholder='Search Shoes'
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox
