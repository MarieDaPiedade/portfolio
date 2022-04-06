import React from 'react';
import '../style/Menu.css';

export default function Menu() {
  return (
    <section className="top-nav">
        <div className="logo">M</div>

        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' htmlFor="menu-toggle">
        <div className='menu-button'></div>
        </label>
        <ul className="menu">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Projets</a></li>
            <li><a href="#">Compétences</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </section>
  )
}
