import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div>
      <div className='movie'>
        <div>
          <p>{movie.Year}</p>
        </div>
        <div>
          <img src={movie.Poster} alt='aMovie.title'/>
        </div>
        <div>
          <span>{movie.Type}</span><br/>
          <div>{movie.Title}</div>
        </div>
       </div>
    </div>
  )
}

export default MovieCard
