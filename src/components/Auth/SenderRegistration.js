import React from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import querystring from 'query-string';
import store from "../../store";
import {
    REGISTRATION, AUTHENTICATE, UPDATE_PASSWORD,
    saveUser, CREATE_PROJECT, LOGOUT, errorMessage, errorMessageDouble,
    errorMessageEmail, connectFunc, actionCreateProject, GUEST_SUBMIT, SHOW_GUESTS,
    showGuests, guestsList, emptyInput, DELETE_GUEST, SEND_PROVIDER, 
    putProvidersInState, CHOOSE_PROVIDER, DELETE_PROVIDER,
    SEND_NEWSLETTER,  updatePasswordMessage,
  } from 'src/store/reducers/userReducer';
  import {
    load, finishLoad, closeLoginForm, errorLoginPseudo, errorLoginPassword,
    PASSWORD_RESET, passwordResetDone, passwordResetError,
  } from 'src/store/reducers/appReducer';

const SenderRegistration=(name,password,email)=>{

    //registration
    const baseUrl = 'https://owedding.fr/admin';
    const data = querystring.stringify({
        username: name,
        password: password,
        email: email,
    });
      store.dispatch(load());
      axios.post(`${baseUrl}/api/signup`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
        },
      })
        .then((response) => {
          console.log('voici response', response);
          if (response.data.subscribe_Status === 'done') {
            store.dispatch(connectFunc());
          } else if (response.data.error === 'username already in use') {
            store.dispatch(errorMessage());
          } else if (response.data.error === 'email already in use') {
            store.dispatch(errorMessageEmail());
          } else if (response.data.error === 'username and email already in use') {
            store.dispatch(errorMessageDouble());
          }
        })
        .catch((error) => {
          console.log('voici error', error);
        })
        .finally(() => {
          store.dispatch(finishLoad());
        });
    
}

SenderRegistration.propTypes={
    name:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
  }
  export default SenderRegistration;