import axios from 'axios';
import querystring from 'query-string';

import {
  REGISTRATION, AUTHENTICATE, UPDATE_PASSWORD,
  saveUser, CREATE_PROJECT, LOGOUT, errorMessage, errorMessageDouble,
  errorMessageEmail, connectFunc, actionCreateProject, GUEST_SUBMIT, SHOW_GUESTS,
  showGuests, guestsList, emptyInput, DELETE_GUEST, SEND_PROVIDER, 
  putProvidersInState, CHOOSE_PROVIDER, DELETE_PROVIDER,
  SEND_NEWSLETTER,  updatePasswordMessage, logout
} from 'src/store/reducers/userReducer';
import {
  load, finishLoad, closeLoginForm, errorLoginPseudo, errorLoginPassword,
  PASSWORD_RESET, passwordResetDone, passwordResetError,SAVE_CANVAS,
} from 'src/store/reducers/appReducer';
import { guestsTable } from 'src/store/reducers/listReducer';
import {
  UPLOAD, getImages, LOAD_IMAGES, loadImages
 } from 'src/store/reducers/galleryReducer';

const Middleware = (store) => (next) => (action) => {
  
  console.log('je suis le middleware');
  next(action);
  const baseUrl = 'https://owedding.fr/admin';
  
  // http://92.243.10.85/Owedding_BACK/O_wedding-back-end/public/api/project/contents/test
  switch (action.type) {
    case REGISTRATION: {
      const data = querystring.stringify({
        username: store.getState().userReducer.username,
        password: store.getState().userReducer.password,
        email: store.getState().userReducer.email,
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
      break;
    }
    case AUTHENTICATE: {
      
      const data = querystring.stringify({
        username: store.getState().userReducer.username,
        password: store.getState().userReducer.password,
      });
      store.dispatch(load());
      axios.post(`${baseUrl}/api/signin`, data, {
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
          } else if (response.data.loginstatus === 'failure the user does not exist') {
            store.dispatch(errorLoginPseudo());
          } else if (response.data.error === 'wrong password') {
            store.dispatch(errorLoginPassword());
          }
         
          
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(finishLoad());
          
        });
      break;
    }
    case LOGOUT: {
      
      localStorage.clear();
      const data = querystring.stringify({
        username: store.getState().userReducer.username,
        token: store.getState().userReducer.token,
      });
      store.dispatch(load());
      axios.post(`${baseUrl}/api/logout`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
        },
      })
        .then((response) => {

          console.log(response);
         
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(finishLoad());         
        });
      break;
    }
    case PASSWORD_RESET: {
      const data = querystring.stringify({
        email: store.getState().appReducer.email,
      });
      store.dispatch(load());
      axios.post(`${baseUrl}/api/reset_password`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
        },
      })
        .then((response) => {
          console.log(response); 
          if (response.data.reset_password_status === 'accepted') {
            store.dispatch(passwordResetDone());
          } else if (response.data.error_status === 'unknown email') {
            store.dispatch(passwordResetError());
          } else {
            store.dispatch(logout());
            
            localStorage.clear();
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(finishLoad());
        });
      break;
    }
    case UPDATE_PASSWORD: {
      const data = querystring.stringify({
        username: store.getState().userReducer.username,
        oldpassword: store.getState().userReducer.oldpassword,
        newpassword: store.getState().userReducer.newpassword,
        token: store.getState().userReducer.token,

      });
      store.dispatch(load());
      axios.post(`${baseUrl}/api/account/update_password`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
        },
      })
        .then((response) => {
          console.log(response);
          if (response.data.update_password_status === 'success') {
            store.dispatch(updatePasswordMessage());
          }else {
            store.dispatch(logout());
            
            localStorage.clear();
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(finishLoad());
          store.dispatch(emptyInput());
        });
      break;
    }
    case CREATE_PROJECT: {
      const data = querystring.stringify({
        name: store.getState().userReducer.name,
        username: store.getState().userReducer.username,    
        token: store.getState().userReducer.token,
        date: store.getState().userReducer.date,
        department: store.getState().userReducer.department,
        forecast_budget: store.getState().userReducer.forecast_budget,

      });
      store.dispatch(load());
      axios.post(`${baseUrl}/api/project/new`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
        },
      })
        .then((response) => {
          console.log(response);          
          store.dispatch(actionCreateProject());   
          store.dispatch(showGuests());
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(finishLoad());
        });
      break;
    }
    case GUEST_SUBMIT: {
      const data = querystring.stringify({
        username: store.getState().userReducer.username,    
        token: store.getState().userReducer.token,
        firstname: store.getState().userReducer.guestFirstName,
        lastname: store.getState().userReducer.guestLastName, 
        type: store.getState().userReducer.guestType,
        email: store.getState().userReducer.guestEmail,

      });
      store.dispatch(load());
      axios.post(`${baseUrl}/api/project/guests/create`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
        },
      })
        .then((response) => {
          console.log(response);
          const user = {
            // username: response.data.username,
            // password: response.data.password,
          };
          const actionSaveUser = saveUser(user);
          // store.dispatch(actionCreateProject());   
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(finishLoad());
          store.dispatch(showGuests());
          store.dispatch(emptyInput());
        });
      break;
    }
    case SHOW_GUESTS: {
      const data = querystring.stringify({
        username: store.getState().userReducer.username,    
        token: store.getState().userReducer.token,
        
      });
      store.dispatch(load());
      axios.post(`${baseUrl}/api/project/show`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
        },
      })
        .then((response) => {
          console.log(response.data.load_data_status);
          // console.log(response.data.project_data.Guest_list);
          if(response.data.load_data_status==='success'){
            const project = {
              guests: response.data.project_data.Guest_list,
              budgetForecast: response.data.project_data.forecast_budget,
              budgetCurrent: response.data.project_data.current_budget, 
              providersAdded: response.data.project_data.provider_project_list,
            };         
            store.dispatch(guestsList(project)); 
            store.dispatch(guestsTable(project));   
          }else {
            store.dispatch(logout());
            localStorage.clear();
          }
         
  
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(finishLoad());
        });
      break;
    }
    case DELETE_GUEST: {
      const data = querystring.stringify({
        username: store.getState().userReducer.username,    
        token: store.getState().userReducer.token,
        id: store.getState().userReducer.guestId,        
      });
      store.dispatch(load());
      axios.post(`${baseUrl}/api/project/guests/remove`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
        },
      })
        .then((response) => {
          console.log(response);
      
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(finishLoad());
          store.dispatch(showGuests());
        });
      break;
    }
    case SEND_PROVIDER: {
      const data = querystring.stringify({
        username: store.getState().userReducer.username,    
        token: store.getState().userReducer.token,
        theme: store.getState().userReducer.theme,    
      });
      store.dispatch(load());
      axios.post(`${baseUrl}/api/search/provider`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
        },
      })
        .then((response) => {
          console.log(response);
          const providers = response.data.search_result; 
          console.log(providers);
          store.dispatch(putProvidersInState(providers));   
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(finishLoad());         
        });
      break;
    }
    case CHOOSE_PROVIDER: {
      const data = querystring.stringify({
        username: store.getState().userReducer.username,    
        token: store.getState().userReducer.token,
        id: action.id,    
      });
      store.dispatch(load());
      axios.post(`${baseUrl}/api/project/provider/add`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
        },
      })
        .then((response) => {
          console.log(response);
         store.dispatch(showGuests());
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(finishLoad());         
        });
      break;
    }
    case DELETE_PROVIDER: {
      const data = querystring.stringify({
        username: store.getState().userReducer.username,    
        token: store.getState().userReducer.token,
        id: action.id,    
      });
      store.dispatch(load());
      axios.post(`${baseUrl}/api/project/provider/remove`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
        },
      })
        .then((response) => {
          console.log(response);
         store.dispatch(showGuests());
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(finishLoad());         
        });
      break;
    }
    case SEND_NEWSLETTER: {
      const data = querystring.stringify({
        username: store.getState().userReducer.username,    
        token: store.getState().userReducer.token,
      });
      store.dispatch(load());
      axios.post(`${baseUrl}/api/project/newsletter`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
        },
      })
        .then((response) => {
          console.log(response);
          //store.dispatch(newsletterSent());
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(finishLoad());         
        });
      break;
    }
    case SAVE_CANVAS:{
      const data = querystring.stringify({
        canvas: store.getState().appReducer.canvas,
        id:store.getState().userReducer.username,   
      });
      axios.post(`${baseUrl}/api/mercure/send-canvas`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
        },
      })
        .then((response) => {
          console.log(response);
         
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
                 
        });
      break;
    }

    default:
      //next(action);
  }
};

export default Middleware;
