import React from 'react';
import '../style/Accueil.css';

export default function Accueil() {
  return (
    <div className="home">
        <div className="pres">
            <p className="hello">HELLO,</p>
            <p className="text-pres">Je suis Marie Da Piedade</p>
            <p className="text-pres">Conceptrice développeuse d'applications</p>
        </div>
        <img src="assets/proud.svg" alt="Image de présentation" id='proud-img'/>
    </div>
  )
}
