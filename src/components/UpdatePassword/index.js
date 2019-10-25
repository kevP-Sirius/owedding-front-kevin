import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';

import './updatePassword.scss';
import DashNav from 'src/containers/DashNav';
import LoadingForButton from 'src/components/LoadingForButton';


const UpdatePassword = ({ 
  newpassword, oldpassword, changeValue, updatePassword,
  updatePasswordDone, loading,
}) => {
  const handleChange = (event) => {
    const { value, name } = event.target;
    changeValue(value, name);
  };  
  const handleSubmit = (event) => {
    event.preventDefault();
    updatePassword();
  };

  return (
    <div id="updatePassword">
      <div className="nav">
        <DashNav />   
      </div>      
      <div className="guestsBoard">
      <div>Modifier votre mot de passe </div>
        <Form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="mariedFirst">        
              <Form.Field>
                <label>Veuillez rentrer votre mot de passe actuel :</label>
                <input
                  placeholder="Mot de passe actuel"
                  type="password"
                  value={oldpassword}
                  name="oldpassword"
                  onChange={handleChange}
                />
              </Form.Field>
            </div>
            <div className="mariedSecond">     
              <Form.Field>
                <label>Veuillez rentrer votre nouveau mot de passe :</label>
                <input
                  placeholder="Nouveau mot de passe"
                  type="password"
                  value={newpassword}
                  name="newpassword"
                  onChange={handleChange}
                />
              </Form.Field>
            </div>
            </div>
          <Button type="submit">{loading ? <LoadingForButton /> : 'Valider'}</Button>
        </Form>
        {
          updatePasswordDone && (
            <div className="updatePasswordDone">
              Votre mot de passe à bien été modifié !
            </div>
          )
        }
      </div>
    </div>
  );
};

UpdatePassword.propTypes = {
  newpassword: PropTypes.string.isRequired,
  oldpassword: PropTypes.string.isRequired,
  updatePasswordDone: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  changeValue: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,

};


export default UpdatePassword;
