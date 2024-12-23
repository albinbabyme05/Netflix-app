import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
                <h1 className='description'>This page is dedicated for netflix but under construction</h1>
            </div>
        </div>
      
    </div>
  )
}

export default Banner
