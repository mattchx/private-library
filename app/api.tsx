import axios from 'axios'

export const API_URL =
  process.env.NODE_ENV === 'production' ? 'https://private-library.com/' : 'http://localhost:3001'

const createInstance = (baseUrl: string) => {
  const instance = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return instance
}

export default createInstance(API_URL)