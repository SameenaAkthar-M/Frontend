import React from 'react'
import './showcase.css'

const Showcase = () => {
  return (
    <div className='showcase-content'>
      <div className="left">
        <h1>Sasen Product Solutions</h1>
        <p>The one-stop shop for all your tile and stone fixing requirements!</p>
      </div>
      <div className="right">
        <img src="/showcase.svg" alt="" className='show-image'/>
      </div>
    </div>
  )
}

export default Showcase