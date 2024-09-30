// Importa a biblioteca Axios
import axios from 'axios'

// Dados da API
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '016c752d26c67214f5a8dbce3147ae5b',
  },
})

export default api