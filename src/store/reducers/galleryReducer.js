// == Initial State
const initialState = {   
  projectImages: [],
  file: '',
  imagesLoaded: false,
  basePath: 'https://owedding.fr/images/',
  imageToDelete:'',
};
  
  // == Types
  export const GET_IMAGES = 'GET_IMAGES';
  export const UPLOAD = 'UPLOAD';
  export const LOAD_IMAGES = 'LOAD_IMAGES';
  export const DELETE_IMAGES = 'DELETE_IMAGES';
  
  // == Reducer
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case GET_IMAGES:
      return {
        ...state,
        projectImages: action.project.images,
        
    };
    case UPLOAD:
      return {
        ...state,
        file: action.file,
        imagesLoaded: false
        
    };
    case LOAD_IMAGES:
      return {
        ...state,
        imagesLoaded: true
    };

    case DELETE_IMAGES:
    return {
      ...state,
      imagesLoaded: false,
      imageToDelete: action.project.imageId
  };
      default:
        return state;
    }
  };
  
  // == Action Creators
  export const getImages = (project) => ({
    type: GET_IMAGES,
    project
  });
  export const upload = (file) => ({
    type: UPLOAD,
    file
  });
  export const loadImages = () => ({
    type: LOAD_IMAGES,
  });
  export const deleteImages = (project) => ({
    type: DELETE_IMAGES,
    project
  });

 
 
 
 
  
  
  // == Export
  export default reducer;
  