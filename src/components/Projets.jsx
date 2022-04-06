import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import '../style/Projets.css'

AOS.init();

export default function Projets() {

    const [data, setData] = useState([]);

    const getData = () => {
        fetch('projects.json', 
        {headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'}})
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson);
        })
    }

    useEffect(() => {
        getData();
    }, [])



  return (
    <div className="projects">
        <h1 data-aos="flip-up" data-aos-duration="2000">PROJETS</h1>
        {
            data && data.length>0 && data.map((item => 
        <div className={item.id % 2 === 0 ? "project-bis" : "project"}>
            <img src={item.picture} alt="photo du projet" className="photo-project"/>
            <div className={item.id % 2 === 0 ? "project-content-bis" : "project-content"}>
                <h2>{item.title}</h2>
                <p className="text-project">{item.content}</p>
                <div className="button-techno">
                    {item.technos.map((value, index) => {
                        return <p className="techno" key={index}>{value}</p>
                    })}
                </div>
                <div className="icone-div">
                    <img className="icone" src="assets/github.svg" alt="GitHub" />
                    <img className="icone" src="assets/link.svg" alt="LinkedIn" />
                </div>
            </div>
        </div>
                ))
        }
    </div>
  )
}
