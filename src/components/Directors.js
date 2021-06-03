import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const showMovies = (director) =>{
    return director.movies.map(movie=>{
      return <li>
        {movie}
      </li>
    })
  }

  const showDirector = () =>{
    return directors.map(director=>{
      return <div>
        <h1>Director: {director.name}</h1>
        <h1>Movies:</h1>
        <ul>{showMovies(director)}</ul>
      </div>
    })
  }


  return (
    <div>
      <h1>Directors Page</h1>
      {showDirector()}
    </div>
  );
}

export default Directors
