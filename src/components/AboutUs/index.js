import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './aboutUs.scss';

const AboutUs = () =>  {
  return (
  <div id="aboutus">
  <div class="intro">
    <p>Crée en 2019, <strong>O'wedding</strong> est une application web qui permet d'organiser son mariage.</p>
    <p>C'est Kevin qui a eu l'idée ! <i class="far fa-smile"></i></p>
    <p><strong>Mais Pourquoi ?</strong> Car Kevin se marie l'année prochaine et a trouvé qu'organiser son mariage n'était pas si facile que ça. Il a donc voulu mettre à contribution ses talents de développeurs aux services des futurs mariés. Nous l'avons accompagné tout au long du projet afin de vous proposer un site complet.
    </p>
    <p>Vous souhaitez nous contacter, nous poser une question, c'est par ici : 
    <Link to="/contact"> <a class="contact"href="#">Oui oui juste ici !</a></Link></p>
  </div>
  <div class="row">
    <div class="col-sm-3">
      <div class="card">
        <img src="assets/Laurine.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Laurine SARDA</h5>
            <p>Developpeuse front spé React</p>
            <hr></hr>
            {/* <p><em>"Ancienne infirmière"</em></p> */}
          </div>
          <div class="card-header">PO / FRONTEND</div>
      </div>
    </div>

    <div class="col-sm-3">
                  <div class="card">
                      <img src="assets/Guena.jpg" class="card-img-top" alt="..."/>
                          <div class="card-body">
                              <h5 class="card-title">Guéna COSARA</h5>
                              <p>Developpeur front spé React</p>
                              <hr></hr>
                              {/* <p><em>"Ancien technicien de maintenance informatique"</em></p> */}
                          </div>
                          <div class="card-header">LEAD FRONT</div>
                  </div>
          </div>

          <div class="col-sm-3">
                  <div class="card">
                      <img src="assets/Kevin.jpeg" class="card-img-top" alt="..."/>
                          <div class="card-body">
                              <h5 class="card-title">Kévin POGNON</h5>
                              <p>Developpeur back spé Symfony</p>
                              <hr></hr>
                              {/* <p><em>"Ancien chargé de clientèle"</em></p> */}
                          </div>
                          <div class="card-header">PM / BACKEND</div>
                  </div>
          </div>

          <div class="col-sm-3">
                  <div class="card">
                      <img src="assets/Del.JPG" class="card-img-top" alt="..."/>
                          <div class="card-body">
                              <h5 class="card-title">Delphine TROCME</h5>
                              <p>Developpeuse back spé Symfony</p>
                              <hr></hr>
                              {/* <p><em>"Ancienne Assistante RH"</em></p> */}
                          </div>
                          <div class="card-header">LEAD BACK</div>
                  </div>
          </div>

      </div>
    <script src="https://kit.fontawesome.com/7d50825b89.js"></script>
</div>


);

       
}

export default AboutUs;



   