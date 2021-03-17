import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
// import { v4 as uuid } from 'uuid'
// import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
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
        <div className='shoeList'>
          <Route exact path='/sneakers' render= {() => (
            <ShoeList />
          )}/>
          <div className='grid'>
            <Route exact path='/sneakers' render= {() => (
              <Card
                title='Converse'
                name='Chuck Taylor Comme des Garcons Play Hidden Heart High Top Sneaker'
                imageUrl='https://n.io.nordstrommedia.com/id/sr3/11f46ecd-1840-4c86-b263-c9265095c1a9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838'
                body='Lorem ipsum dolor sit amet consectetur'
              />
            )}/>
            <Route exact path='/sneakers' render= {() => (
              <Card
                title='Card Title'
                imageUrl='https://n.io.nordstrommedia.com/id/sr3/11f46ecd-1840-4c86-b263-c9265095c1a9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838'
                body='Lorem ipsum dolor sit amet consectetur'
              />
            )}/>
            <Route exact path='/sneakers' render= {() => (
              <Card
                title='Card Title'
                imageUrl='https://n.io.nordstrommedia.com/id/sr3/11f46ecd-1840-4c86-b263-c9265095c1a9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838'
                body='Lorem ipsum dolor sit amet consectetur'
              />
            )}/>
            <Route exact path='/sneakers' render= {() => (
              <Card
                title='Card Title'
                imageUrl='https://n.io.nordstrommedia.com/id/sr3/11f46ecd-1840-4c86-b263-c9265095c1a9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838'
                body='Lorem ipsum dolor sit amet consectetur'
              />
            )}/>
            <Route exact path='/sneakers' render= {() => (
              <Card
                title='Card Title'
                imageUrl='https://n.io.nordstrommedia.com/id/sr3/11f46ecd-1840-4c86-b263-c9265095c1a9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838'
                body='Lorem ipsum dolor sit amet consectetur'
              />
            )}/>
            <Route exact path='/sneakers' render= {() => (
              <Card
                title='Card Title'
                imageUrl='https://n.io.nordstrommedia.com/id/sr3/11f46ecd-1840-4c86-b263-c9265095c1a9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838'
                body='Lorem ipsum dolor sit amet consectetur'
              />
            )}/>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App
