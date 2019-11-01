// == Initial State
const initialState = {
    
    projectImages: [],
    file:'',
    
};
  
  // == Types
  export const GET_IMAGES = 'GET_IMAGES';
  export const UPLOAD = 'UPLOAD';
  
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
 
 
 
 
  
  
  // == Export
  export default reducer;
  