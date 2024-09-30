// Importa React e hooks useState e useEffect
import React, { useState, useEffect } from 'react';
// Importa useParams
import { useParams } from 'react-router-dom';
// Importa a instância da API
import api from '../utils/api';
// Importa styled-components
import styled from 'styled-components';

// Define o componente Profile
const Profile = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  // useEffect para buscar os detalhes do filme
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await api.get(`/movie/${id}`, {
          params: {
            language: 'pt-BR',
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

  // Renderiza os detalhes do filme
  return (
    <PageContainer>
      <ContentContainer>
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
      </ContentContainer>
      
    </PageContainer>
  );
};

export default Profile;

// Aplica CSS  utilizando styled-components.

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 85vh;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

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

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  width: 100%;
`;