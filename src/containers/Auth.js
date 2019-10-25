// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Auth from 'src/components/Auth';

// Action Creators
import { changeInputConnect, connectFunc } from 'src/store/reducers/userReducer';
import { closeLoginForm, mdpForgotten } from 'src/store/reducers/appReducer';


const mapStateToProps = (state) => ({
  loading: state.appReducer.loading,
  username: state.userReducer.username,
  password: state.userReducer.password,
  logged: state.userReducer.logged,
  passwordForgotten: state.appReducer.passwordForgotten,
  errorLoginPseudo: state.appReducer.errorLoginPseudo,
  errorLoginPassword: state.appReducer.errorLoginPassword,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputConnect: (value, name) => {
    dispatch(changeInputConnect(value, name));
  },
  connectFunc: () => {
    dispatch(connectFunc());
  },
  closeLoginForm: () => {
    dispatch(closeLoginForm());
  },
  mdpForgotten: () => {
    dispatch(mdpForgotten());
  },
});


// Container
const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);

// == Export
export default AuthContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
*/
