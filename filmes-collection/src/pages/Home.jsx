// Importa os hooks 'useState' e 'useEffect'
import { useState, useEffect } from 'react';
// Importa o componente 'Link' da biblioteca 'react-router-dom'
import { Link } from 'react-router-dom';
// Importa a instância do axios 
import api from '../utils/api';

// Define um estado 'movies' para armazenar a lista de filmes
const Home = () => {
  const [movies, setMovies] = useState([]);

  // Usa 'useEffect' para fazer a requisição de filmes
  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await api.get('/discover/movie');
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  // Estrutura principal do componente 'Home'
  return (
    <div className="home-container">
      <h1 className="section-title">Catálogo de Filmes</h1>
      <h1 className="section-title">Clique no cartaz para ver detalhes sobre o filme</h1>
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