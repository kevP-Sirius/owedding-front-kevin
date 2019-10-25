// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SignUp from 'src/components/SignUp';

// Action Creators
import {
  changeValue, registration, BlurFalse, BlurTrue, 
} from 'src/store/reducers/userReducer';


const mapStateToProps = (state) => ({
  username: state.userReducer.username,
  email: state.userReducer.email,
  password: state.userReducer.password,
  passwordConfirm: state.userReducer.passwordConfirm,
  loading: state.appReducer.loading,
  blur_username: state.userReducer.blur_username,
  blur_email: state.userReducer.blur_email,
  blur_password: state.userReducer.blur_password,
  blur_passwordConfirm: state.userReducer.blur_passwordConfirm,
  errorMessage: state.userReducer.errorMessage,
  errorMessageEmail: state.userReducer.errorMessageEmail,
  errorMessageDouble: state.userReducer.errorMessageDouble,
});


const mapDispatchToProps = (dispatch) => ({
  changeInput: (value, name) => {
    dispatch(changeValue(value, name));
  },
  changeBlurFalse: (name) => {
    dispatch(BlurFalse(name));
  },
  changeBlurTrue: (name) => {
    dispatch(BlurTrue(name));
  },
  doSignUp: () => {
    dispatch(registration());
  },
});

// Container
const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

// == Export
export default SignUpContainer;
