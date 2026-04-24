import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData)
}

// Toys API
export const toysAPI = {
  getAll: () => api.get('/toys'),
  getById: (id) => api.get(`/toys/${id}`),
  getByCategory: (category) => api.get(`/toys/category/${category}`),
  getFeatured: () => api.get('/toys/featured'),
  getByBrand: (brand) => api.get(`/toys/brand/${brand}`),
  create: (toy) => api.post('/toys', toy),
  update: (id, toy) => api.put(`/toys/${id}`, toy),
  delete: (id) => api.delete(`/toys/${id}`)
}

// Categories API
export const categoriesAPI = {
  getAll: () => api.get('/categories'),
  getById: (id) => api.get(`/categories/${id}`),
  create: (category) => api.post('/categories', category),
  update: (id, category) => api.put(`/categories/${id}`, category),
  delete: (id) => api.delete(`/categories/${id}`)
}

// Upload API
export const uploadAPI = {
  uploadImage: (file) => {
    const formData = new FormData()
    formData.append('file', file)
    return axios.post(`${API_BASE_URL}/upload/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

export default api
