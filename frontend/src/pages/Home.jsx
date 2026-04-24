import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toysAPI } from '../services/api'
import { FaStar } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  const [featuredToys, setFeaturedToys] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    loadFeaturedToys()
  }, [])

  const loadFeaturedToys = async () => {
    try {
      const response = await toysAPI.getFeatured()
      setFeaturedToys(response.data)
    } catch (error) {
      console.error('Erro ao carregar brinquedos em destaque:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1> Bem-vindo a ToyStore! </h1>
          <p>Os melhores brinquedos com as melhores ofertas! </p>
          <button className="btn btn-primary" onClick={() => navigate('/catalog')}>
            Veja as novidades.
          </button>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-header">
          <FaStar className="section-icon" />
          <h2> New in! Brinquedos em Lançamento</h2>
        </div>

        {loading ? (
          <div className="spinner"></div>
        ) : featuredToys.length === 0 ? (
          <div className="empty-state">
            <p>Nenhum brinquedo em destaque no momento.</p>
          </div>
        ) : (
          <div className="toys-grid">
            {featuredToys.map(toy => (
              <div key={toy.id} className="toy-card">
                <div className="toy-image">
                  <img src={toy.imageUrl || 'https://via.placeholder.com/300x300?text=Sem+Imagem'} alt={toy.description} />
                  <div className="featured-badge">
                    <FaStar /> Destaque
                  </div>
                </div>
                <div className="toy-info">
                  <h3>{toy.description}</h3>
                  <p className="toy-brand">{toy.brand}</p>
                  <p className="toy-category">{toy.category}</p>
                  <div className="toy-footer">
                    <span className="toy-price">{formatPrice(toy.price)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Home
