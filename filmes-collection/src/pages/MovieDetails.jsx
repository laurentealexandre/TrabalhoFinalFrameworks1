import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../utils/api'
import styled from 'styled-components'

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const { data } = await api.get(`/movie/${id}`)
      setMovie(data)
    }
    fetchMovieDetails()
  }, [id])

  if (!movie) {
    return <div>Loading...</div>
  }

  return (
    <MovieDetailsContainer>
      <Poster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <Details>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Runtime: {movie.runtime} minutes</p>
        <p>Vote Average: {movie.vote_average}</p>
        <h3>Cast:</h3>
        <CastList>
          {movie.credits.cast.slice(0, 5).map((actor) => (
            <li key={actor.id}>{actor.name}</li>
          ))}
        </CastList>
      </Details>
    </MovieDetailsContainer>
  )
}

export default MovieDetails

const MovieDetailsContainer = styled.div`
  display: flex;
  padding: 2rem;
`

const Poster = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
  margin-right: 2rem;
`

const Details = styled.div`
  flex: 1;

  h2 {
    margin-top: 0;
  }

  p {
    margin-bottom: 1rem;
  }
`

const CastList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.5rem;
  }
`