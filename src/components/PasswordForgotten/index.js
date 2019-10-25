import React from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './passwordForgotten.scss';
import LoadingForButton from 'src/components/LoadingForButton';


const PasswordForgotten = ({ 
  email, changeValue, submitPasswordReset, closeLoginForm,
  resetPasswordDone, passwordResetError, backToAuth, loading,
}) => {
  const handleChange = (event) => {
    const { value, name } = event.target;
    changeValue(value, name);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    submitPasswordReset();
  };
  const handleAuth = () => {
    backToAuth();
  };
  return (
    <div id="passwordForgotten">
      <Icon 
        name="times circle outline"
        className="authIconClose"
        onClick={closeLoginForm}
      />
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Votre email</label>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </Form.Field>        
        {passwordResetError && (
          <div className="errorMessage">
            Oups, email incorrect ! 
          </div>
        )}
        {resetPasswordDone && (
          <div className="errorMessage">
            Un nouveau mot de passe vous à été envoyé sur votre boite mail &#128522;
          </div>
        )}        
        <Button type="submit">{loading ? <LoadingForButton /> : 'Envoyer'}</Button>
      </Form>
      <div className="mdpForgotten" onClick={handleAuth}>Retour</div>

    </div>
  );
};

PasswordForgotten.propTypes = {
  email: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  submitPasswordReset: PropTypes.func.isRequired,
  closeLoginForm: PropTypes.func.isRequired,
  resetPasswordDone: PropTypes.bool.isRequired,
  passwordResetError: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  backToAuth: PropTypes.func.isRequired,
};

export default PasswordForgotten;
