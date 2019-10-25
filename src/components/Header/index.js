// == Import : npm
import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';


// == Import : local
import './header.scss';
import Auth from 'src/containers/Auth';

// == Composant
const Header = ({ openLoginForm, buttonLogin, logged, logout }) => (
  <div id="header">
    <h1 className="headerTitle"><Link to="/">O'Wedding</Link></h1>
   
    {logged && (
      <Button
        className="logoutButton"
        onClick={logout}
      >
        Deconnexion
      </Button>
    )}
      
    {buttonLogin && !logged && (
      <Button
        className="loginButton"
        onClick={openLoginForm}
      >
       Login
      </Button>
    )}
    {!buttonLogin && <Auth />}
    {logged && (<Redirect to="/dashboard" />)}   
    
  </div>
);

Header.propTypes = {
  buttonLogin: PropTypes.bool.isRequired,
  openLoginForm: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

// == Export
export default Header;
