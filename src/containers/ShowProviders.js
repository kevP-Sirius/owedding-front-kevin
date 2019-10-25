// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ShowProviders from 'src/components/ShowProviders';

// Action Creators
import { chooseProvider } from 'src/store/reducers/userReducer';


const mapStateToProps = (state) => ({
  providers: state.userReducer.providers,
});


const mapDispatchToProps = (dispatch) => ({
  chooseProvider: (id) => {
  dispatch(chooseProvider(id));
  },
});

// Container
const ShowProvidersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowProviders);

// == Export
export default ShowProvidersContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
