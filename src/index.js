import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import 'tachyons'
import App from './App'
import { HashRouter } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'

const appJsx = (
  <HashRouter>
    <div className='body'>
      <App />
    </div>
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
