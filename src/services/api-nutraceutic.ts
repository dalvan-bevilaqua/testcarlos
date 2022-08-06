import axios from 'axios'

const api_nutraceutic = axios.create({
  headers: {
    Accept: 'text/plain',
    'Content-Type': 'application/json-patch+json'
  },
  baseURL: String(process.env.NEXT_PUBLIC_API_URL)
})

export default api_nutraceutic
