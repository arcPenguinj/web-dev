import React, {useEffect, useState} from "react";
import service from './service';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({title: '', rating: 4.0});
    const findMovieById = (movie) =>
        service.findMovieById(movie._id)
        .then(movie => setMovie(movie));

    useEffect(() =>
    service.findAllMovies()
      .then(movies => setMovies(movies)), []);

  const deleteMovie = (movie) =>
    service.deleteMovie(movie._id)
    .then(() => setMovies(
        movies.filter(m => m !== movie)));

  const createMovie = () =>
    service.createMovie({title: 'New Movie', rating: 4.1})
        .then(actualMovie =>
        setMovies([
            actualMovie, ...movies
        ]));
  
  const updateMovie = (event) =>
    setMovie({...movie, title: event.target.value});

  const saveMovie = () =>
    service.updateMovie(movie)
      .then(() => setMovies(
        movies.map(m => m._id === movie._id ? movie : m)
      ));

  
  return(
    <div>
        <button
        onClick={createMovie}
        className="btn btn-success float-end">
        Create
        </button>

      <h2>Movies</h2>
      
      <ul className="list-group">
        <li className="list-group-item">
          <button
            onClick={saveMovie}
            className="btn btn-primary float-end">
            Save
          </button>

          <input
            defaultValue={movie.title}
            onChange={updateMovie}
            style={{width: "50%"}}
            className="form-control"/>
        </li>

        {
          movies.map(movie =>
            <li key={movie._id}
                className="list-group-item">
            <button
                className="btn btn-danger float-end"
                onClick={() => deleteMovie(movie)}>
                Delete
            </button>
            <button
                onClick={() => findMovieById(movie)}
                className="btn btn-warning float-end ms-2">
                Edit
            </button>

            {movie.title}
            </li>
          )
        }
      </ul>
    </div>
  )
};

export default Movies;
