// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import UpdatePassword from 'src/components/UpdatePassword';

// Action Creators
import { changeValue, updatePassword } from 'src/store/reducers/userReducer';

const mapStateToProps = (state) => ({
  newpassword: state.userReducer.newpassword,
  oldpassword: state.userReducer.oldpassword,
  updatePasswordDone: state.userReducer.updatePasswordDone,
  loading: state.appReducer.loading,
});


const mapDispatchToProps = (dispatch) => ({
  changeValue: (value, name) => {
    dispatch(changeValue(value, name));
  },
  updatePassword: () => {
    dispatch(updatePassword());
  },    
});

// Container
const UpdatePasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdatePassword);

// == Export
export default UpdatePasswordContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdatePassword);
*/
