// Importa a biblioteca styled-components
import styled from 'styled-components'

// Define um componente chamado Footer.
const Footer = () => {
  return (
    // Retorna o JSX do componente
    <FooterContainer>
      {}
      <p>&copy; Catálogo de filmes. Todos os direitos reservados.</p>
    </FooterContainer>
  )
}

// Exporta o componente 'Footer' 
export default Footer

// Aplica CSS  utilizando styled-components.

const FooterContainer = styled.footer`
  background-color: #333;    
  color: #fff;               
  padding: 1rem;             
  text-align: center;        
`
