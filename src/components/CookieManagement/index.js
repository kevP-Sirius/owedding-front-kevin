// == Import : npm
import React from 'react';

// == Import : local
import './cookieManagement.scss';


// == Composant
const CookieManagement = () => (
  <div id="cookie-management">
    <h1 id='titre-cookie'>Gestion des cookies</h1> 
    <h2 className="lilTitleCookie">PREAMBULE</h2>
    <p className="corpusCookie">Un cookie est un fichier texte déposé lors de la consultation d’un site, d’une application ou d’une publicité en ligne et stocké dans un espace spécifique du disque dur de votre ordinateur ou de votre appareil mobile. Les cookies sont gérés par votre navigateur Internet et seul l’émetteur d’un cookie peut décider de la lecture ou de la modification des informations qui y sont contenues. Il permet d'analyser le comportement des usagers lors de la visite d'un site internet ou de l'utilisation d'un logiciel ou d'une application mobile. Un cookie ne vous identifie pas personnellement. Il permet à son émetteur de reconnaître votre terminal et de collecter un certain nombre d’informations relatives à la navigation effectuée depuis ce terminal. Les cookies ont plusieurs fonctions, telles que vous permettre de naviguer efficacement sur un site ou une application, se souvenir de vos choix, vous proposer des contenus publicitaires pertinents en fonction de vos centres d’intérêts exprimés lors de votre navigation. </p>
    <h2 className="lilTitleCookie">EXPLOITATION DES INFORMATIONS</h2>
    <p className="corpusCookie">Aucune utilisation des cookies n'est faite par le site www.owedding.fr à des fins de prospection ciblé , ou d'usage commercial en générale. Si à l'avenir une utilisation en était faite les createurs du site s'engage à mettre en place  tout les moyens necessaire afin d'informer les internautes de la finalité de l'utilisation des cookies , obtenir le consentement des internautes et également fournir aux internautes les moyens de les refuser. La durée de validité du consentement donné dans ce cadre est de 13 mois maximum.</p>
  </div>
);

// == Export
export default CookieManagement;
