// == Initial State
const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
  token: '',
  logged: false,
  oldpassword: '',
  newpassword: '',
  blur_username: true,
  blur_email: true,
  blur_password: true,
  blur_passwordConfirm: true,
  name: '',
  date: '',
  department: '',
  budgetForecast: '',
  budgetCurrent: '',
  project_status: false,
  errorMessage: false,
  errorMessageEmail: false,
  errorMessageDouble: false,
  guestTypeError: false,
  guestLastName: '',
  guestFirstName: '',
  guestType: '',
  guestEmail: '',
  guests: [],
  providers: [],
  guestId: '',
  theme: '',
  providersAdded: [],
  newsletterSent: false,
  updatePasswordDone: false,
};

// == Types
const CHANGE_VALUE = 'CHANGE_VALUE';
const BLUR_FALSE = 'BLUR_FALSE';
const BLUR_TRUE = 'BLUR_TRUE';
const CHANGE_INPUT_CONNECT = 'CHANGE_INPUT_CONNECT';
const SAVE_USER = 'SAVE_USER';
const GUESTS_LIST = 'GUESTS_LIST';
const PUT_GUEST_ID = 'PUT_GUEST_ID';
const GUEST_TYPE_ERROR = 'GUEST_TYPE_ERROR';
const GUEST_TYPE_ERROR_FALSE = 'GUEST_TYPE_ERROR_FALSE';
const SHOW_PROVIDERS_LIST = 'SHOW_PROVIDERS_LIST';
const PUT_PROVIDERS = 'PUT_PROVIDERS';
const UPDATE_PASSWORD_DONE = 'UPDATE_PASSWORD_DONE';
export const REGISTRATION = 'REGISTRATION';
export const AUTHENTICATE = 'AUTHENTICATE';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const LOGOUT = 'LOGOUT';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export const ERROR_MESSAGE_EMAIL = 'ERROR_MESSAGE_EMAIL';
export const ERROR_MESSAGE_DOUBLE = 'ERROR_MESSAGE_DOUBLE';
export const ACTION_CREATE_PROJECT = 'ACTION_CREATE_PROJECT';
export const GUEST_SUBMIT = 'GUEST_SUBMIT';
export const SHOW_GUESTS = 'SHOW_GUESTS';
export const EMPTY_INPUT = 'EMPTY_INPUT';
export const DELETE_GUEST = 'DELETE_GUEST';
export const SEND_PROVIDER = 'SEND_PROVIDER';
export const CHOOSE_PROVIDER = 'CHOOSE_PROVIDER';
export const DELETE_PROVIDER = 'DELETE_PROVIDER';
export const SEND_NEWSLETTER = 'SEND_NEWSLETTER';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case BLUR_FALSE:
      return {
        ...state,
        [action.name]: false,
      };
    case BLUR_TRUE:
      return {
        ...state,
        [action.name]: true,
      };
    case CHANGE_INPUT_CONNECT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        logged: true,
        username: action.user.username,    
        token: action.user.token,
        project_status: action.user.project_status,         
      };
    case LOGOUT:
      return {
        ...state,
        logged: false, 
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: true,        
      };
    case ERROR_MESSAGE_EMAIL:
      return {
        ...state,
        errorMessageEmail: true,        
      };
    case ERROR_MESSAGE_DOUBLE:
      return {
        ...state,
        errorMessageDouble: true,        
      };
    case ACTION_CREATE_PROJECT:
      return {
        ...state,
        project_status: true,      
      };
    case GUESTS_LIST:
      return {
        ...state,
        newsletterSent: false,
        guests: action.project.guests,
        budgetForecast: action.project.budgetForecast,
        budgetCurrent: action.project.budgetCurrent,   
        providersAdded: action.project.providersAdded,   
      };
    case EMPTY_INPUT:
      return {
        ...state,
        guestLastName: '',
        guestFirstName: '',
        guestType: '',
        guestEmail: '',
        oldpassword: '',
        newpassword: '',
      };
    case PUT_GUEST_ID:
      return {
        ...state,
        guestId: action.choise,
      };
    case GUEST_TYPE_ERROR: 
      return {
        ...state,
        guestTypeError: true,
      };
    case GUEST_TYPE_ERROR_FALSE:
      return {
        ...state,
        guestTypeError: false,
      };
    case SHOW_PROVIDERS_LIST:
      return {
        ...state,
        theme: action.theme,
      };
    case PUT_PROVIDERS:
      return {
        ...state,
        providers: action.providers,
      };
    case SEND_NEWSLETTER:
      return {
        ...state,
        newsletterSent: true,
      };
    case UPDATE_PASSWORD_DONE:
      return {
        ...state,
        updatePasswordDone: true,
      };
    default:
      return state;
  }
};

// == Action Creators
export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});
export const BlurFalse = (name) => ({
  type: BLUR_FALSE,
  name,
});
export const BlurTrue = (name) => ({
  type: BLUR_TRUE,
  name,
});
export const changeInputConnect = (value, name) => ({
  type: CHANGE_INPUT_CONNECT,
  value,
  name,
});
export const guestTypeError = () => ({
  type: GUEST_TYPE_ERROR,
});
export const guestTypeErrorFalse = () => ({
  type: GUEST_TYPE_ERROR_FALSE,
});
export const showProvidersList = (theme) => ({
  type: SHOW_PROVIDERS_LIST,
  theme,  
});
export const putProvidersInState = (providers) => ({
  type: PUT_PROVIDERS,
  providers,
});
// == Action Creators for Middleware

export const registration = () => ({
  type: REGISTRATION,
});
export const connectGoogle = () => ({
  type: GOOGLESIGNIN,
});
export const connectFunc = () => ({
  type: AUTHENTICATE,
});
export const resetPassword = () => ({
  type: RESET_PASSWORD,
});
export const updatePassword = () => ({
  type: UPDATE_PASSWORD,
});
export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});
export const createProject = () => ({
  type: CREATE_PROJECT,
});
export const logout = () => ({
  type: LOGOUT,
});
export const errorMessage = () => ({
  type: ERROR_MESSAGE,
});
export const errorMessageEmail = () => ({
  type: ERROR_MESSAGE_EMAIL,
});
export const errorMessageDouble = () => ({
  type: ERROR_MESSAGE_DOUBLE,
});
export const actionCreateProject = () => ({
  type: ACTION_CREATE_PROJECT,
});
export const guestSubmit = () => ({
  type: GUEST_SUBMIT,
});
export const showGuests = () => ({
  type: SHOW_GUESTS,
});
export const guestsList = (project) => ({
  type: GUESTS_LIST,
  project,
});
export const emptyInput = () => ({
  type: EMPTY_INPUT,
});
export const putGuestId = (id) => ({
  type: PUT_GUEST_ID,
  choise: id,
  });
export const deleteGuest = () => ({
  type: DELETE_GUEST,
  });
export const sendProvider = () => ({
  type: SEND_PROVIDER,
  });
export const chooseProvider = (id) => ({
  type: CHOOSE_PROVIDER,
  id,
  });
export const deleteProvider = (id) => ({
  type: DELETE_PROVIDER,
  id,
  });
  export const sendNewsletter = () =>({
    type: SEND_NEWSLETTER,
  });
  export const updatePasswordMessage = () =>({
    type: UPDATE_PASSWORD_DONE,
  });

// == Selectors
export const getMaried = guests => guests.filter(guest => guest.type === 'maried');

export const getWitness = guests => guests.filter(guest => guest.type === 'witness');

export const getGuest = guests => guests.filter(guest => guest.type === 'guest');


export const getSortedList = (guests) => {
  // j'aurais pu me passer des 3 selectors suivants
  // mais c'est plus pratique de décomposer
  // comme ça au besoin, si je veux par exemple récupérer la liste tâches accomplies
  // j'ai déjà le selector pour ça
  const mariedList = getMaried(guests);
  const witnessList = getWitness(guests);
  const guestList = getGuest(guests);
  const sortedList = [
    ...mariedList,
    ...witnessList,
    ...guestList,
  ];
  return sortedList;
};

// == Export
export default reducer;


// subscribe_Status: "done" - signup

// login_status: "succes" - signin
// loginstatus: "failure the user does not exist"
// error: "wrong password"

// create_project_status: "success" - create_project