import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const showMovies = (director) =>{
    return director.movies.map(movie=>{
      return <li>
        {movie}
      </li>
    })
  }

  const showDirector = () =>{
    return actors.map(director=>{
      return <div>
        <h1>Actor: {director.name}</h1>
        <h1>Movies:</h1>
        <ul>{showMovies(director)}</ul>
      </div>
    })
  }


  return (
    <div>
      <h1>Actors Page</h1>
      {showDirector()}
    </div>
  );
};

export default Actors;
