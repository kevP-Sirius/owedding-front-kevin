// == Initial State
const initialState = {
  loading: false,
  buttonLogin: true,
  errorLoginPseudo: false,
  errorLoginPassword: false,
  passwordForgotten: false,
  email: '',
  passwordResetError: false,
  resetPasswordDone: false,
  draw: false,
  canvas:''
};

// == Types
const BACK_TO_AUTH = 'BACK_TO_AUTH';
const CHANGE_VALUE = 'CHANGE_VALUE';
const LOAD = 'LOAD';
const FINISH_LOAD = 'FINISH_LOAD';
const OPEN_LOGIN_FORM = 'OPEN_LOGIN_FORM';
const CLOSE_LOGIN_FORM = 'CLOSE_LOGIN_FORM';
const ERROR_LOGIN_PSEUDO = 'ERROR_LOGIN_PSEUDO';
const ERROR_LOGIN_PASSWORD = 'ERROR_LOGIN_PASSWORD';
const PASSWORD_FORGOTTEN = 'PASSWORD_FORGOTTEN';
const PASSWORD_RESET_DONE = 'PASSWORD_RESET_DONE';
const PASSWORD_RESET_ERROR = 'PASSWORD_RESET_ERROR';
const DRAW_SWITCH ='DRAW_SWITCH';
const DRAW_SWITCH_OFF='DRAW_SWITCH_OFF';
export const SAVE_CANVAS='SAVE_CANVAS';
export const PASSWORD_RESET = 'PASSWORD_RESET';


// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case BACK_TO_AUTH:
      return {
        ...state,
        passwordForgotten: false,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case FINISH_LOAD:
      return {
        ...state,
        loading: false,
      };
    case OPEN_LOGIN_FORM:
      return {
        ...state,
        buttonLogin: false,
      };
    case CLOSE_LOGIN_FORM:
      return {
        ...state,
        buttonLogin: true,
      };
    case ERROR_LOGIN_PSEUDO:
      return {
        ...state,
        errorLoginPseudo: true,
      };
    case ERROR_LOGIN_PASSWORD:
      return {
        ...state,
        errorLoginPassword: true,
      };
    case PASSWORD_FORGOTTEN:
      return {
        ...state,
        passwordForgotten: true,
      };
    case PASSWORD_RESET_DONE:
      return {
        ...state,
        resetPasswordDone: true,
        passwordResetError: false,
      };
    case PASSWORD_RESET_ERROR:
      return {
        ...state,
        passwordResetError: true,
      };
    case DRAW_SWITCH:
   
    return {
      ...state,
      draw: !state.draw,
    };

    case DRAW_SWITCH_OFF:
   
    return {
      ...state,
      draw: false,
    };
    case SAVE_CANVAS:
    return {
      ...state,
      canvas: action.canvas.canvas,    
           
    };
    default:
      return state;
  }
};

// == Action Creators
export const backToAuth = () => ({
  type: BACK_TO_AUTH,
});
export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});
export const load = () => ({
  type: LOAD,
});

export const finishLoad = () => ({
  type: FINISH_LOAD,
});
export const openLoginForm = () => ({
  type: OPEN_LOGIN_FORM,  
});
export const closeLoginForm = () => ({
  type: CLOSE_LOGIN_FORM,  
});
export const errorLoginPseudo = () => ({
  type: ERROR_LOGIN_PSEUDO,
});
export const errorLoginPassword = () => ({
  type: ERROR_LOGIN_PASSWORD,
});
export const mdpForgotten = () => ({
  type: PASSWORD_FORGOTTEN,
});
export const passwordResetDone = () => ({
  type: PASSWORD_RESET_DONE,
});
export const passwordResetError = () => ({
  type: PASSWORD_RESET_ERROR,
});
export const submitPasswordReset = () => ({
  type: PASSWORD_RESET,
});

export const drawSwitch = () => ({
  type: DRAW_SWITCH,
});

export const drawSwitchOff = () => ({
  type: DRAW_SWITCH_OFF,
});

export const saveCanvas= (canvas) => ({
  type: SAVE_CANVAS,
  canvas,
});


// == Export
export default reducer;
