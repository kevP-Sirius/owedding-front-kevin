// == Import : npm
import React from 'react';



// == Import : local
import './siteMap.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// == Composant
const SiteMap = () => (  
    
<div id ="site-map">

    <h1 id="site-map-title">Plan du site :</h1>  
    <hr></hr>
    <p className="sitemapParag"><Link to="/contact">Contact</Link></p>
    <p className="sitemapParag"><Link to="/AboutUs">À propos</Link></p>
    <p className="sitemapParag"><Link to="/site-map">Plan du site</Link></p>
    <p className="sitemapParag"><Link to="/LegalsMentions">Mentions légales</Link></p>
    <p className="sitemapParag"><Link to="/cookie-management">Gestion des cookies</Link></p>
    <p className="sitemapParag"><Link to="/privacy-policy">Politique de confidentialité</Link></p>
</div>

);

// == Export
export default SiteMap;
