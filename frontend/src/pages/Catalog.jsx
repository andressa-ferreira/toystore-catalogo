import React, { useState, useEffect } from 'react'
import { toysAPI, categoriesAPI } from '../services/api'
import { FaFilter, FaSearch } from 'react-icons/fa'
import './Catalog.css'

const Catalog = () => {
  const [toys, setToys] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const [toysResponse, categoriesResponse] = await Promise.all([
        toysAPI.getAll(),
        categoriesAPI.getAll()
      ])
      setToys(toysResponse.data)
      setCategories(categoriesResponse.data)
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category)
    setLoading(true)
    try {
      if (category === 'all') {
        const response = await toysAPI.getAll()
        setToys(response.data)
      } else {
        const response = await toysAPI.getByCategory(category)
        setToys(response.data)
      }
    } catch (error) {
      console.error('Erro ao filtrar por categoria:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredToys = toys.filter(toy =>
    toy.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    toy.brand.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <div className="catalog">
      <div className="catalog-header">
        <h1>Catálogo de Brinquedos</h1>
      </div>

      <div className="categories-strip">
        <div className="category-item" onClick={() => handleCategoryClick('all')}>
          <div className={`category-badge ${selectedCategory === 'all' ? 'active' : ''}`}>
            <span>Todos</span>
          </div>
        </div>
        {categories.map(category => (
          <div 
            key={category.id} 
            className="category-item"
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className={`category-badge ${selectedCategory === category.name ? 'active' : ''}`}>
              <img 
                src={category.imageUrl || 'https://via.placeholder.com/80x80?text=' + category.name} 
                alt={category.name}
              />
              <span>{category.name}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="filters-section">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Buscar brinquedos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-info">
          <FaFilter />
          <span>
            {selectedCategory === 'all' 
              ? `${filteredToys.length} brinquedos encontrados` 
              : `${filteredToys.length} brinquedos em "${selectedCategory}"`}
          </span>
        </div>
      </div>

      {loading ? (
        <div className="spinner"></div>
      ) : filteredToys.length === 0 ? (
        <div className="empty-state">
          <p>Nenhum brinquedo encontrado.</p>
        </div>
      ) : (
        <div className="catalog-grid">
          {filteredToys.map(toy => (
            <div key={toy.id} className="catalog-card">
              <div className="catalog-image">
                <img src={toy.imageUrl || 'https://via.placeholder.com/300x300?text=Sem+Imagem'} alt={toy.description} />
              </div>
              <div className="catalog-info">
                <h3>{toy.description}</h3>
                <p className="catalog-brand">{toy.brand}</p>
                <p className="catalog-category">{toy.category}</p>
                {toy.details && <p className="catalog-details">{toy.details}</p>}
                <div className="catalog-footer">
                  <span className="catalog-price">{formatPrice(toy.price)}</span>
                  <span className="catalog-code">Cód: {toy.code}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Catalog
