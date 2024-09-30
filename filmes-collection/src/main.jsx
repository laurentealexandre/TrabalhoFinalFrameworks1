// Importa a biblioteca React
import React from 'react'
// Importa o ReactDOM
import ReactDOM from 'react-dom/client'
// Importa o Auth0Provider
import { Auth0Provider } from '@auth0/auth0-react'
// Importa o componente App
import App from './App'
// Importa os estilos globais da aplicação
import './index.css'

// Cria um ponto de entrada para a aplicação React no elemento DOM com o ID 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="YOUR_AUTH0_DOMAIN"
      clientId="YOUR_AUTH0_CLIENT_ID"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
)