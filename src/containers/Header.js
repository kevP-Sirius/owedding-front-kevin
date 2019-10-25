// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';

// Action Creators
import { openLoginForm } from 'src/store/reducers/appReducer';
import { logout } from 'src/store/reducers/userReducer';


const mapStateToProps = (state) => ({
  buttonLogin: state.appReducer.buttonLogin,
  logged: state.userReducer.logged,
});


const mapDispatchToProps = (dispatch) => ({
  openLoginForm: () => {
    dispatch(openLoginForm());
  },
  logout: () => {
    dispatch(logout());
  },
});

// Container
const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default PageContainer;
