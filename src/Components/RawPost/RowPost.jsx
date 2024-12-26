import React from 'react'
import './RowPost.css'

import { useEffect, useState } from 'react'
import axios from "../../axios"
import { API_KEY, IMAGE_URL } from '../../constants/constants'



function RowPost() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`)
    .then((response)=>{
      console.log(response.data); 
      setMovies(response.data.results)
    }).catch(err=>{
      alert("Network Error")
    });
    
  }, [])

  return (
    <div className='row'>
      <h2>Netflix Originals</h2>
      <div className='posters'>
        {movies.map((obj) =>
            <img className='poster' src={`${IMAGE_URL+obj.backdrop_path}`} alt="poster" />  
        )}
    
      </div>
    </div>
  )
}

export default RowPost
