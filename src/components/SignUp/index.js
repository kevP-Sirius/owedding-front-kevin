// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Icon } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// == Import : local
import './signup.scss';
import Loading from 'src/components/Loading';


// == Composant
const SignUp = ({
  username, password, passwordConfirm, email, changeInput, doSignUp,
  blur_username, blur_email, blur_password, blur_passwordConfirm,
  changeBlurFalse, changeBlurTrue, loading, errorMessage, errorMessageEmail, errorMessageDouble,
}) => {
  const handleChange = (e) => {
    const { value, name } = e.target;
    changeInput(value, name);
  };
  const handleBlur = (e) => {
    const { value, name } = e.target;
    const blurName = `blur_${name}`;

    if (value === '') {
      console.log('il me faut des données');
      // e.target.classList.remove('blur');
      // e.target.classList.add('blurFalse');
      changeBlurFalse(blurName);
    }
    else {
      changeBlurTrue(blurName);
      // e.target.classList.remove('blurFalse');
      // e.target.classList.add('blur');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    blur_username && blur_email && blur_password && blur_passwordConfirm && doSignUp();
  };

  return (
    <div id="signup">
    {loading ? <Loading /> : (
      <div className="signupInside">
      <div className="signupLeft">
       
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label>Pseudo</label>
                <input
                  className={blur_username ? '' : 'blurFalse'}
                  placeholder="Veuillez saisir un pseudo"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 {!blur_username && (
                  <div className="inputBlurFalse">
                    Veuillez saisir votre pseudo s'il vous plait.
                  </div>
                )}
                {errorMessage && (
                  <div className="errorMessage">
                    Ce pseudo est déja utilisé ! Veuillez en choisir un autre.
                  </div>
                )}
              </Form.Field>
              <Form.Field>
                <label>E-mail</label>
                <input
                  type="email"
                  className={blur_email ? '' : 'blurFalse'}
                  placeholder="Veuillez saisir votre e-mail"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!blur_email && (
                  <div className="inputBlurFalse">
                    Veuillez saisir votre e-mail s'il vous plait
                  </div>
                )}
                {errorMessageEmail && (
                  <div className="errorMessage">
                    Cet Email est déja utilisé ! Veuillez en saisir un autre.
                  </div>
                )}
              </Form.Field>
              <Form.Field>
                <label>Mot de passe</label>
                <Input
                  type="password"
                  className={blur_password ? 'blurFalse' : 'blurFalse'}
                  placeholder="Votre mot de passe"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!blur_password && (
                  <div className="inputBlurFalse">
                    Veuillez saisir votre mot de passe s'il vous plait
                  </div>
                )}
              </Form.Field>
              <Form.Field>
                <label>Confirmation mot de passe</label>
                <Input
                  type="password"
                  className={blur_passwordConfirm ? '' : 'blurFalse'}
                  placeholder="Confirmer votre mot de passe"
                  name="passwordConfirm"
                  value={passwordConfirm}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {(password !== passwordConfirm) && (
                  <div className="errorMessage">
                    Vos deux mots de passe sont différents. Merci de bien vouloir les ressaisir.
                  </div>
                )}
                {errorMessageDouble && (
                  <div className="errorMessage">
                    Ce pseudo et cet Email est sont déjà utilisés ! Veuillez en saisir un autre.
                  </div>
                )}
              </Form.Field>
              <Button className="signupButton" type="submit">Valider</Button>
              {/* <div className="redirection" onclick="location.href=http://localhost:8080/dashboard/guests" alt="Redirection"><span>Déjà inscrit ? </span><Icon name='arrow right' /> </div> */}
              <a className="redirection"><Link to="/">Déjà inscrit ?</Link></a>      
            </Form>
     
      </div>
      <div className="signupRight"></div>
      </div>
      )}
      
    </div>
  );
};

SignUp.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  blur_username: PropTypes.bool.isRequired,
  blur_email: PropTypes.bool.isRequired,
  blur_password: PropTypes.bool.isRequired,
  blur_passwordConfirm: PropTypes.bool.isRequired,
  changeInput: PropTypes.func.isRequired,
  changeBlurTrue: PropTypes.func.isRequired,
  changeBlurFalse: PropTypes.func.isRequired,
  doSignUp: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.bool.isRequired,
  errorMessageEmail: PropTypes.bool.isRequired,
  errorMessageDouble: PropTypes.bool.isRequired,

};

// == Export
export default SignUp;
