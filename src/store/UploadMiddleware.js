import axios from 'axios';
import querystring from 'query-string';

import {
 UPLOAD, getImages, LOAD_IMAGES, loadImages, DELETE_IMAGES
} from 'src/store/reducers/galleryReducer';
import {
  load, finishLoad,
} from 'src/store/reducers/appReducer';
import {
  logout,
} from 'src/store/reducers/userReducer';

const Middleware = (store) => (next) => (action) =>{
  console.log('je suis le UploadMiddleware');
  next(action);
  const baseUrl = 'https://owedding.fr/admin';
  switch (action.type) {
    case LOAD_IMAGES: {
      const data = querystring.stringify({
        username: store.getState().userReducer.username,
        token: store.getState().userReducer.token,
      });         
      axios.post(`${baseUrl}/api/project/images`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
        },
      }).then((response) => {
        console.log('voici response', response);
        console.log('voici response', response.data.images_status);
        if(response.data.images_status==='done')
        {
          
          const project = {
            images: response.data.images,   
          };
          console.log(project);
          store.dispatch(getImages(project));
        }else if (response.data.images_status!=='done'){
          alert('session expiré');
          store.dispatch(logout());
        } 
      }).catch((error) => {
        console.log('voici error', error);
      }).finally(() => {
       
      });
      break;
    }
    case UPLOAD: {
      const data = store.getState().galleryReducer.file;
      store.dispatch(load());   
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
      }).then((response) => {
        console.log('voici response', response);
      }).catch((error) => {
        console.log('voici error', error);
      }).finally(() => {  
        store.dispatch(finishLoad()); 
        store.dispatch(loadImages());
            
      });
      break;

      
    } 
    case DELETE_IMAGES: {
      console.log('imageToDelete:'+ store.getState().galleryReducer.imageToDelete)
      const data = querystring.stringify({
        username: store.getState().userReducer.username,
        token: store.getState().userReducer.token,
        id: store.getState().galleryReducer.imageToDelete,
      });         
      axios.post(`${baseUrl}/api/project/images/delete`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
        },
      }).then((response) => {
        console.log('voici response', response);
        console.log('voici response', response.data.images_status);
        if(response.data.images_status==='deleted')
        {        
          console.log('deletion:done');
          store.dispatch(loadImages());
         
        }else if (response.data.images_status==='not found'){
          console.log('deletion:failed');
        } 
      }).catch((error) => {
        console.log('voici error', error);
      }).finally(() => {
       
      });
      break;
      
    } 
    default:
      //next(action);
  }
};

export default Middleware;
