// Importa a biblioteca 'styled-components'
import styled from 'styled-components'

// Define o componente funcional 'MovieCard'
const MovieCard = ({ movie }) => {
  return (
    <Card>
      <Poster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <Title>{movie.title}</Title>
      <Overview>{movie.overview}</Overview>
    </Card>
  )
}

export default MovieCard

// Aplica CSS  utilizando styled-components.
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`

const Poster = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 1rem;
`

const Title = styled.h3`
  margin-bottom: 0.5rem;
  
`

const Overview = styled.p`
  text-align: justify;
`