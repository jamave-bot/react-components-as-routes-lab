import React from 'react';
import { movies } from '../data';

const Movies = () => {

  
  const showGenres = (movie) =>{
    return movie.genres.map(genre=>{
      return <li>
        {genre}
      </li>
    })
  }

  const showMovie = () =>{
    return movies.map(movie=>{
      return <div>
        <h1>Title: {movie.title}</h1>
        <h1>Time: {movie.time}</h1>
        <h1>Genres:</h1>
        <ul>{showGenres(movie)}</ul>
      </div>
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {showMovie()}
    </div>
  );
};

export default Movies;
