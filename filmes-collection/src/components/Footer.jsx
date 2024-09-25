import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; Catálogo de filmes. Todos os direitos reservados.</p>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`