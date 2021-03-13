// import React from 'react'
// import axios from 'axios'
//
// class ShoeInput extends React.Component {
//   state = {
//     name: ''
//   }
//
// handleChange = event => {
//   this.setState({ name: event.target.value })
// }
//
// handleSubmit = event => {
//   event.preventDefault()
//
//   const user = {
//     name: this.state.name
//   }
//
//   axios.post('https://api.thesneakerdatabase.com/v1/sneakers?limit=50', { user })
//     .then(res => {
//       console.log(res)
//       console.log(res.data)
//     })
// }
//
// render () {
//   return (
//     <form onSubmit={this.handleSubmit}>
//       <label>
//       Shoe Name:
//         <input type='text' name='name' onChange={this.handleChange} />
//       </label>
//       <button type='submit'>Search</button>
//     </form>
//   )
// }
// }
//
// export default ShoeInput

// class ShoesShow2 extends React.Component {
//   state = {
//     shoe: '',
//     name: '',
//     brand: '',
//     limit: '50'
//   }
