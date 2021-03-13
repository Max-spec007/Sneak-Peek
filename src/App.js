import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
// import { v4 as uuid } from 'uuid'
// import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
// import Cardlist from './Cardlist'
import About from './components/About/About'
import Home from './components/Home/Home'
import ShoeList from './components/ShoeList/ShoeList'
// import SearchBox from './components/Home/SearchBox'
// import ShoeInput from './components/ShoeInput/ShoeInput'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sneakers: [],
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  // setUser = user => this.setState({ user })

  // handleChange = e => {
  //   this.setState({ searchField: e.target.value })
  // }
  //
  render () {
    const { user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        <main className="container">
          <Route exact path='/about' render= {() => (
            <About />
          )}/>
          <Route exact path='/' render= {() => (
            <Home />
          )}/>
        </main>
        <div className='ShoeList'>
          <Route exact path='/sneakers' render= {() => (
            <ShoeList />
          )}/>
        </div>
      </Fragment>
    )
  }
}

export default App
