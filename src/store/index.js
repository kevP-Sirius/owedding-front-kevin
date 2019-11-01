// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer from 'src/store/reducer';
import Middleware from './Middleware';
import UploadMiddleware from './UploadMiddleware';
// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancers = composeEnhancers(
//   applyMiddleware(Middleware),
// );


// On peut avoir plusieurs middlewares :
// nos actions passeront tour à tout dans chaque middleware dans l'ordre avant d'arriver au reducer
const enhancers = composeEnhancers(
  applyMiddleware(
    Middleware,
    UploadMiddleware,
  )
);


const store = createStore(
  reducer,
  enhancers,
);

// == Export
export default store;
