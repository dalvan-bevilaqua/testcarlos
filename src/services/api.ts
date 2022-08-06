import axios from 'axios'

const api = axios.create({
  headers: {
    Accept: 'text/plain',
    'Content-Type': 'application/json-patch+json'
  },
  baseURL: String(process.env.NEXT_PUBLIC_BASE_URL)
})

export default api
