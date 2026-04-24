import React, { useState, useEffect } from 'react'
import { categoriesAPI, uploadAPI } from '../services/api'
import { FaPlus, FaEdit, FaTrash, FaSave, FaTimes, FaImage, FaUpload } from 'react-icons/fa'
import './CategoryManager.css'

const CategoryManager = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingCategory, setEditingCategory] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageUrl: ''
  })
  const [error, setError] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    try {
      const response = await categoriesAPI.getAll()
      setCategories(response.data)
    } catch (error) {
      console.error('Erro! Tente novamente.', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Selecione apenas arquivos de imagem.')
        return
      }
      
      if (file.size > 5 * 1024 * 1024) {
        setError('A imagem deve ter 5MB/máx.')
        return
      }
      
      setImageFile(file)
      
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
      setError('')
    }
  }

  const handleUploadImage = async () => {
    if (!imageFile) {
      setError('Primeiro, selecione a imagem')
      return
    }

    setUploading(true)
    setError('')

    try {
      const response = await uploadAPI.uploadImage(imageFile)
      const imageUrl = 'http://localhost:8080' + response.data.url
      
      setFormData(prev => ({
        ...prev,
        imageUrl: imageUrl
      }))
      
      setImageFile(null)
      alert('Imagem enviada com sucesso!')
    } catch (error) {
      setError('Erro ao fazer upload da imagem, tente novamente!')
      console.error('ERROR:', error)
    } finally {
      setUploading(false)
    }
  }

  const handleNewCategory = () => {
    setEditingCategory(null)
    setFormData({
      name: '',
      description: '',
      imageUrl: ''
    })
    setImageFile(null)
    setImagePreview(null)
    setShowForm(true)
    setError('')
  }

  const handleEditCategory = (category) => {
    setEditingCategory(category)
    setFormData({
      name: category.name,
      description: category.description || '',
      imageUrl: category.imageUrl || ''
    })
    setImageFile(null)
    setImagePreview(category.imageUrl || null)
    setShowForm(true)
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      if (editingCategory) {
        await categoriesAPI.update(editingCategory.id, formData)
      } else {
        await categoriesAPI.create(formData)
      }
      setShowForm(false)
      loadCategories()
    } catch (error) {
      setError(error.response?.data || 'Erro ao salvar categoria, tente novamente.')
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Deseja excluir essa categoria?')) {
      try {
        await categoriesAPI.delete(id)
        loadCategories()
      } catch (error) {
        alert('Erro ao excluir categoria, tente novamente.')
      }
    }
  }

  return (
    <div className="category-manager">
      <div className="category-manager-header">
        <h2>Gerenciar Categorias</h2>
        <button className="btn btn-primary" onClick={handleNewCategory}>
          <FaPlus /> Nova Categoria
        </button>
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingCategory ? 'Editar Categoria' : 'Nova Categoria'}</h2>
              <button className="close-btn" onClick={() => setShowForm(false)}>
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">Nome da Categoria *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="description">Descrição</label>
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>

              <div className="image-upload-section">
                <label><FaImage /> Imagem da Categoria</label>
                
                {imagePreview && (
                  <div className="image-preview">
                    <img src={imagePreview} alt="Preview" />
                  </div>
                )}

                <div className="upload-controls">
                  <input
                    type="file"
                    id="categoryImageFile"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="categoryImageFile" className="btn btn-secondary">
                    <FaUpload /> Escolher Imagem
                  </label>
                  
                  {imageFile && (
                    <button 
                      type="button" 
                      className="btn btn-primary" 
                      onClick={handleUploadImage}
                      disabled={uploading}
                    >
                      {uploading ? 'Enviando...' : 'Fazer Upload'}
                    </button>
                  )}
                </div>
              </div>

              {error && <div className="error-message">{error}</div>}

              <div className="form-actions">
                <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>
                  <FaTimes /> Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  <FaSave /> Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="categories-grid">
          {categories.map(category => (
            <div key={category.id} className="category-card">
              <div className="category-image">
                <img 
                  src={category.imageUrl || 'https://via.placeholder.com/200x200?text=' + category.name} 
                  alt={category.name} 
                />
              </div>
              <div className="category-info">
                <h3>{category.name}</h3>
                {category.description && <p>{category.description}</p>}
              </div>
              <div className="category-actions">
                <button 
                  className="btn-icon btn-edit" 
                  onClick={() => handleEditCategory(category)}
                  title="Editar"
                >
                  <FaEdit />
                </button>
                <button 
                  className="btn-icon btn-delete" 
                  onClick={() => handleDelete(category.id)}
                  title="Excluir"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryManager
