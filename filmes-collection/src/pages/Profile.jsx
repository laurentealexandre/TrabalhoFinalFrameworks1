import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api';
import styled from 'styled-components';

const Profile = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await api.get(`/movie/${id}`, {
          params: {
            language: 'pt-BR', // Define o idioma como português do Brasil
          },
        });
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
    <ProfileContainer>
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieDetails>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <MovieInfo>
          <p><strong>Data de lançamento:</strong> {movie.release_date}</p>
          <p><strong>Avaliação:</strong> {movie.vote_average}/10</p>
          <p><strong>Sinopse:</strong> {movie.overview}</p>
          <p><strong>Gênero:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
        </MovieInfo>
      </MovieDetails>
    </ProfileContainer>
  );
};

export default Profile;

// Styled Components

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const MovieTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  color: #ffd700;
`;

const MovieDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MoviePoster = styled.img`
  max-width: 300px;
  width: 100%;
  height: auto;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const MovieInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 10px;
    font-size: 1.1em;
    color: #ffd700;
  }

  strong {
    color: #ffd700;
  }
`;