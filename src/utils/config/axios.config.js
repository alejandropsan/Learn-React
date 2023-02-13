import axios from 'axios'

// Configuración por defecto para AXIOS
export default axios.create(
    {
        baseURL: 'https://randomuser.me/api',
        responseType: 'json',
        timeout: 6000
    }
)