import axios from 'axios';
import querystring from 'query-string';

import {
 GET_IMAGES,getImages,UPLOAD
} from 'src/store/reducers/galleryReducer';



const Middleware = (store) => (next) => (action) => {
  
  console.log('je suis le UploadMiddleware');
  next(action);
  const baseUrl = 'https://owedding.fr/admin';
  

  switch (action.type) {
    case GET_IMAGES: {
        const data = querystring.stringify({
            username: store.getState().userReducer.username,
            token: store.getState().userReducer.token,
            
        });
          
          axios.post(`${baseUrl}/api/project/images`, data, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
            },
          })
            .then((response) => {
              console.log('voici response', response);
              if (response.data.images_status === 'done') {
                const project = {
                    images:response.data.project.images
                }
                store.dispatch(getImages(project));
              } else if (response.data.error === 'username already in use') {
                
              } else if (response.data.error === 'email already in use') {
                
              } else if (response.data.error === 'username and email already in use') {
                
              }
            })
            .catch((error) => {
              console.log('voici error', error);
            })
            .finally(() => {
              
            });
          break;
    }
    case UPLOAD: {
        const data = store.getState().galleryReducer.file;
          
          axios.post(`${baseUrl}/api/project/images/upload`, data, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
            },
            processData: false,
            contentType: false,
            cache: false,
            traditional: true,
            enctype: 'multipart/form-data',
          })
            .then((response) => {
              console.log('voici response', response);
              if (response.data.images_status === 'done') {
                const project = {
                    images:response.data.project.images
                }
                store.dispatch(getImages(project));
              } else if (response.data.error === 'username already in use') {
                
              } else if (response.data.error === 'email already in use') {
                
              } else if (response.data.error === 'username and email already in use') {
                
              }
            })
            .catch((error) => {
              console.log('voici error', error);
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
