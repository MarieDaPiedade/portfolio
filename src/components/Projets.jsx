import React from 'react'
import AOS from 'aos';
import '../style/Projets.css'

AOS.init();

export default function Projets() {
  return (
    <div className="projects">
        <h1 data-aos="flip-up" data-aos-duration="2000">PROJETS</h1>
        <div className="project">
            <img src="assets/blog.png" alt="photo du projet" className="photo-project"/>
            <div className="project-content">
                <h2>NOM DU PROJET</h2>
                <p className="text-project">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                A, auctor aliquam vestibulum, est pellentesque. Aliquam 
                tellus congue montes, sed lacus, arcu.
                </p>
                <div className="button-techno">
                    <p className="techno">Techno</p>
                    <p className="techno">Techno</p>
                    <p className="techno">Techno</p>
                    <p className="techno">Techno</p>
                    <p className="techno">Techno</p>
                </div>
                <div className="icone-div">
                    <img className="icone" src="assets/github.svg" alt="GitHub" />
                    <img className="icone" src="assets/link.svg" alt="LinkedIn" />
                </div>
            </div>

        </div>
    </div>
  )
}
