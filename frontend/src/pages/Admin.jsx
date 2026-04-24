import React, { useState, useEffect } from 'react'
import { toysAPI, uploadAPI, categoriesAPI } from '../services/api'
import { FaPlus, FaEdit, FaTrash, FaSave, FaTimes, FaImage, FaUpload } from 'react-icons/fa'
import CategoryManager from '../components/CategoryManager'
import './Admin.css'

const Admin = () => {
  const [toys, setToys] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingToy, setEditingToy] = useState(null)
  const [formData, setFormData] = useState({
    code: '',
    description: '',
    category: '',
    brand: '',
    imageUrl: '',
    price: '',
    details: '',
    isFeatured: false
  })
  const [error, setError] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    loadToys()
    loadCategories()
  }, [])

  const loadToys = async () => {
    try {
      const response = await toysAPI.getAll()
      setToys(response.data)
    } catch (error) {
      console.error('Erro ao carregar brinquedos:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadCategories = async () => {
    try {
      const response = await categoriesAPI.getAll()
      setCategories(response.data)
    } catch (error) {
      console.error('Erro ao carregar categorias:', error)
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validar tipo de arquivo
      if (!file.type.startsWith('image/')) {
        setError('Por favor, selecione apenas arquivos de imagem')
        return
      }
      
      // Validar tamanho (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('A imagem deve ter no máximo 5MB')
        return
      }
      
      setImageFile(file)
      
      // Criar preview
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
      setError('Selecione uma imagem primeiro')
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
      setError('Erro ao fazer upload da imagem')
      console.error('Upload error:', error)
    } finally {
      setUploading(false)
    }
  }

  const handleNewToy = () => {
    setEditingToy(null)
    setFormData({
      code: '',
      description: '',
      category: '',
      brand: '',
      imageUrl: '',
      price: '',
      details: '',
      isFeatured: false
    })
    setImageFile(null)
    setImagePreview(null)
    setShowForm(true)
    setError('')
  }

  const handleEditToy = (toy) => {
    setEditingToy(toy)
    setFormData({
      code: toy.code,
      description: toy.description,
      category: toy.category,
      brand: toy.brand,
      imageUrl: toy.imageUrl || '',
      price: toy.price,
      details: toy.details || '',
      isFeatured: toy.isFeatured || false
    })
    setImageFile(null)
    setImagePreview(toy.imageUrl || null)
    setShowForm(true)
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      if (editingToy) {
        await toysAPI.update(editingToy.id, formData)
      } else {
        await toysAPI.create(formData)
      }
      setShowForm(false)
      loadToys()
    } catch (error) {
      setError(error.response?.data || 'Erro ao salvar brinquedo')
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este brinquedo?')) {
      try {
        await toysAPI.delete(id)
        loadToys()
      } catch (error) {
        alert('Erro ao excluir brinquedo')
      }
    }
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <div className="admin">
      <div className="admin-header">
        <h1>Administração de Brinquedos</h1>
        <button className="btn btn-primary" onClick={handleNewToy}>
          <FaPlus /> Novo Brinquedo
        </button>
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingToy ? 'Editar Brinquedo' : 'Novo Brinquedo'}</h2>
              <button className="close-btn" onClick={() => setShowForm(false)}>
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="input-group">
                  <label htmlFor="code">Código *</label>
                  <input
                    type="text"
                    id="code"
                    name="code"
                    value={formData.code}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="description">Descrição *</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="category">Categoria *</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecione uma categoria</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="brand">Marca *</label>
                  <input
                    type="text"
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="price">Valor *</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    step="0.01"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="image-upload-section">
                <label><FaImage /> Imagem do Brinquedo</label>
                
                {imagePreview && (
                  <div className="image-preview">
                    <img src={imagePreview} alt="Preview" />
                  </div>
                )}

                <div className="upload-controls">
                  <input
                    type="file"
                    id="imageFile"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="imageFile" className="btn btn-secondary">
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

              <div className="input-group">
                <label htmlFor="details">Detalhes</label>
                <textarea
                  id="details"
                  name="details"
                  rows="4"
                  value={formData.details}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="isFeatured"
                    checked={formData.isFeatured}
                    onChange={handleInputChange}
                  />
                  <span>Brinquedo em Destaque</span>
                </label>
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
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Descrição</th>
                <th>Categoria</th>
                <th>Marca</th>
                <th>Valor</th>
                <th>Destaque</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {toys.map(toy => (
                <tr key={toy.id}>
                  <td>{toy.code}</td>
                  <td>{toy.description}</td>
                  <td>{toy.category}</td>
                  <td>{toy.brand}</td>
                  <td>{formatPrice(toy.price)}</td>
                  <td>
                    {toy.isFeatured ? (
                      <span className="badge badge-featured">Sim</span>
                    ) : (
                      <span className="badge badge-normal">Não</span>
                    )}
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="btn-icon btn-edit" 
                        onClick={() => handleEditToy(toy)}
                        title="Editar"
                      >
                        <FaEdit />
                      </button>
                      <button 
                        className="btn-icon btn-delete" 
                        onClick={() => handleDelete(toy.id)}
                        title="Excluir"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <CategoryManager />
    </div>
  )
}

export default Admin
