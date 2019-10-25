// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import PasswordForgotten from 'src/components/PasswordForgotten';

// Action Creators
import { 
  closeLoginForm, backToAuth, submitPasswordReset, changeValue,
} from 'src/store/reducers/appReducer';


const mapStateToProps = (state) => ({
  email: state.appReducer.email,
  loading: state.appReducer.loading,
  passwordForgotten: state.userReducer.passwordForgotten,
  errorLoginPseudo: state.appReducer.errorLoginPseudo,
  errorLoginPassword: state.appReducer.errorLoginPassword, 
  resetPasswordDone: state.appReducer.resetPasswordDone,
  passwordResetError: state.appReducer.passwordResetError,
});


const mapDispatchToProps = (dispatch) => ({
  changeValue: (value, name) => {
    dispatch(changeValue(value, name));
  },
  submitPasswordReset: () => {
    dispatch(submitPasswordReset());
  },
  closeLoginForm: () => {
    dispatch(closeLoginForm());
  },
  backToAuth: () => {
    dispatch(backToAuth());
  },
});


// Container
const PasswordForgottenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PasswordForgotten);

// == Export
export default PasswordForgottenContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PasswordForgotten);
*/
