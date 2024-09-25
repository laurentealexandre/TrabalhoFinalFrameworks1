import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <NavList>
          <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
          <NavItem><StyledLink to="/profile">Detalhes do Filme</StyledLink></NavItem>
          <NavItem><StyledLink to="/contact">Contato</StyledLink></NavItem>
        </NavList>
      </nav>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1.5rem;
  font-family: 'Roboto', sans-serif; // Adicionada uma fonte mais moderna
`

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center; // Centraliza os itens horizontalmente
`

const NavItem = styled.li`
  margin: 0 1.5rem; // Ajustado o espaçamento entre os itens
`

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem; // Aumentado o tamanho da fonte
  font-weight: 500; // Adicionado um peso médio para melhor legibilidade
  text-transform: uppercase; // Transformado o texto em maiúsculas para um visual mais impactante
  letter-spacing: 1px; // Adicionado um pequeno espaçamento entre as letras
  transition: color 0.3s ease; // Adicionada uma transição suave para o efeito hover

  &:hover {
    color: #ffd700; // Alterada a cor do hover para um tom dourado
  }
`