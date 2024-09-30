// Importa o componente Router 
import { BrowserRouter as Router } from 'react-router-dom'
// Importa o componente de rotas da aplicação
import AppRoutes from './Routes'
// Importa o componente de cabeçalho da aplicação
import Header from './components/Header'
// Importa o componente de rodapé da aplicação
import Footer from './components/Footer'

// Define o componente principal da aplicação.
function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  )
}

export default App