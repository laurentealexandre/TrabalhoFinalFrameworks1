import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await api.get('/discover/movie');
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className="home-container">
      <h1 className="section-title">Catálogo de Filmes</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <Link to={`/profile/${movie.id}`} key={movie.id}>
            <div className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-title">{movie.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;