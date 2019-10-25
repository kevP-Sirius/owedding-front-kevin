import React from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import './auth.scss';
import PasswordForgotten from 'src/containers/PasswordForgotten';
import LoadingForButton from 'src/components/LoadingForButton';
import  { saveUser } from 'src/store/reducers/userReducer';
import SenderLogin from'./SenderLogin';

const Auth = ({ 
  username, password, changeInputConnect, connectFunc, closeLoginForm,
  logged, errorLoginPseudo, passwordForgotten, loading, mdpForgotten,
  errorLoginPassword,
}) => {
  const handleChange = (event) => {
    const { value, name } = event.target;
    changeInputConnect(value, name);

  };
  const handleSubmit = (event) => {
    event.preventDefault();
    connectFunc();
  };
  const handlePassword = () => {
    console.log('click pass forgotten');
    mdpForgotten();
  };

  const responseGoogle = (response) => {

    console.log(response);
    console.log(response.Zi.access_token);
    console.log(response.w3.ig);
    console.log(response.googleId);
    console.log(response.w3.U3);
    const token = response.Zi.access_token
    const username = response.w3.ig
    const password = response.googleId
    const email =response.w3.U3
    SenderLogin(username,password,email,token)
    
  }
  return (
    <div id="auth">
      {logged && (<Redirect to="/dashboard" />)}   
      {passwordForgotten ? <PasswordForgotten /> : (
        <>
          <Icon 
            name="times circle outline"
            className="authIconClose"
            onClick={closeLoginForm}
          />
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Pseudo ou Email</label>
              <input
                placeholder="Pseudo ou E-mail"
                value={username}
                name="username"
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Mot de passe</label>
              <input
                placeholder="Mot de passe"
                value={password}
                name="password"
                type="password"
                onChange={handleChange}
              />
            </Form.Field>
            <div className="mdpForgotten" onClick={handlePassword}>Mot de passe oublié ?</div>
            {(errorLoginPseudo || errorLoginPassword) && (
              <div className="errorMessage">
                Identifiant ou mot de passe incorrect ! 
              </div>
            )}
            
            <Button type="submit">{loading ? <LoadingForButton /> : 'Se connecter'}</Button>
            <div id="googleLogin">
            <GoogleLogin
              clientId="803639939358-q9c39mq7beldk89o6l13o7dbkbobhr4s.apps.googleusercontent.com"
              buttonText="Se connecter avec Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
            </div>
          </Form>
          <Link className="redirection" to="/signup">Pas encore inscrit ?</Link>
        </>
      )}
    </div>
  );
};

Auth.propTypes = {
  loading: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeInputConnect: PropTypes.func.isRequired,
  connectFunc: PropTypes.func.isRequired,
  closeLoginForm: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  errorLoginPseudo: PropTypes.bool.isRequired,
  errorLoginPassword: PropTypes.bool.isRequired,
  passwordForgotten: PropTypes.bool.isRequired,
  mdpForgotten: PropTypes.func.isRequired,
};

export default Auth;
