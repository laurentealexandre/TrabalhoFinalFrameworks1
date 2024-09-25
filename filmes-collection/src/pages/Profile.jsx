import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api';
import './Profile.css'; 

const Profile = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await api.get(`/movie/${id}`);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h1 className="movie-title">{movie.title}</h1>
      <div className="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="movie-info">
          <p><strong>Data de lançamento:</strong> {movie.release_date}</p>
          <p><strong>Avaliação:</strong> {movie.vote_average}/10</p>
          <p><strong>Sinopse:</strong> {movie.overview}</p>
          <p><strong>Gênero:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
