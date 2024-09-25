import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Profile from './pages/Profile'
import Contact from './pages/Contact'  

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />  
    </Routes>
  )
}

export default AppRoutes