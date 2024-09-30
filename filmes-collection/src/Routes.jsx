// Importa os componentes Routes e Route
import { Routes, Route } from 'react-router-dom'
// Importa o componente Home
import Home from './pages/Home'
// Importa o componente Profile
import Profile from './pages/Profile'
// Importa o componente Contact
import Contact from './pages/Contact'  

// Define o componente AppRoutes
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />      
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />  
    </Routes>
  )
}

export default AppRoutes