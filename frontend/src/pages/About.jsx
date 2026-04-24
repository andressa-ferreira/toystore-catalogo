import React from 'react'
import { FaUsers } from 'react-icons/fa'
import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <FaUsers className="about-icon" />
        <h1>Sobre o Projeto</h1>

      </div>

      <div className="about-content">
        <section className="about-section">
          <h2> Projeto - Laboratório de Engenharia de Software </h2>
          <p>
            ToyStore é uma loja de brinquedos e artigos infantis. O desenvolvimento do projeto é criar um sistema capaz de gerenciar esse site.
          </p>
          <p>
            O sistema permite que administradores cadastrem, editem e excluam brinquedos,
            enquanto usuários comuns podem navegar pelo catálogo e visualizar os produtos disponíveis.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About
