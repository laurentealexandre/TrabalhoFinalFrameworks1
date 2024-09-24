import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Movie App. All rights reserved.</p>
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