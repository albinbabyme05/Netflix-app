import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios  from '../../axios'
import { API_KEY, IMAGE_URL } from '../../constants/constants'




function Banner() {

  /* usestatet to set the movies */
  const [movie, setmovie] = useState()

  /* from the firstime of mountuíng getting all data */

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response)=>{
      console.log(response.data); 
      setmovie(response.data.results[1])
    })
  }, [])


  return (
    <div 
    style={{backgroundImage: `url(${movie ? IMAGE_URL + movie.backdrop_path : " "})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : " "}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
