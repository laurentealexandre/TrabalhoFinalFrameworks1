import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;

  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-right: 1rem;

      a {
        color: #fff;
        text-decoration: none;

        &:hover {
          color: #ccc;
        }
      }
    }
  }
`