import React from 'react'
import './MainSection.css'
import { Button } from 'antd'

const MainSection = () => {
  return (
    <div className='main-textbox'>
      <h1 className='main-headline'>Welcome to Sneak Peek!</h1>
      <div className='main-line'></div>
      <p className='main-intro'>I work hard to educate shoe enthusiasts on the history of some of the Worlds well known skeakers.</p>
      <Button type="primary" className='main-button'>Learn More</Button>
    </div>
  )
}

export default MainSection
