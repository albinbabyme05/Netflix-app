import React from 'react'
import './RowPost.css'

import { useEffect, useState } from 'react'
import axios from "../../axios"
import { IMAGE_URL, API_KEY } from '../../constants/constants'

import Youtube from 'react-youtube'



function RowPost(props) {
  const [movies, setMovies] = useState([])

  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url)
    .then((response)=>{
      console.log(response.data); 
      setMovies(response.data.results)
    }).catch(err=>{
      alert("Network Error")
    });
    
  }, [])


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    }
  };

  /* to get the movie id*/ 
  const handleTrailer = (id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results !==0){
        // the id element usually asosoicated with first position in the array
        setUrlId(response.data.results[0])
      }else{
        console.log("Empty array");
        
      }
      
    })
    console.log(id);
    
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj) =>
            // passing th id here to get id of movei when clicking
            <img onClick={()=>handleTrailer(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${IMAGE_URL+obj.backdrop_path}`} alt="poster" />  
        )}
      </div>
        {/* to get the video when clicked */}
        { urlId && <Youtube  opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost
