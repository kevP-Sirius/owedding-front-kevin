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
import SenderRegistration from'./SenderRegistration';
import {
  load, finishLoad, closeLoginForm, errorLoginPseudo, errorLoginPassword,
  PASSWORD_RESET, passwordResetDone, passwordResetError,
} from 'src/store/reducers/appReducer';

const SenderLogin=(name,password,email,token)=>{
  //signin
  const baseUrl = 'https://owedding.fr/admin';

  const data = querystring.stringify({

    username: email,
    password: password,
    token:token,
    googleStatus:true

    
  });
  store.dispatch(load());
  axios.post(`${baseUrl}/api/google-signin`, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
    },
  })
    .then((response) => {
      console.log(response);
      const user = {
        username: response.data.username,
        token: response.data.token,
        project_status: response.data.project_status,
        
      };
      
      const actionSaveUser = saveUser(user);
      if (response.data.login_status === 'succes') {
        store.dispatch(actionSaveUser);
        store.dispatch(closeLoginForm());
        store.dispatch(showGuests()); // Cette fonction (showGuest) va lancer une requête au back pour montrer la liste d'invités.
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('username',response.data.username);
        localStorage.setItem('project_status',response.data.project_status);
      }
     
    })
  
   
};

SenderLogin.propTypes={
  name:PropTypes.string.isRequired,
  password:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
  token:PropTypes.string.isRequired,
}
export default SenderLogin;