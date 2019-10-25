// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Providers from 'src/components/Providers';

// Action Creators
import { showProvidersList, sendProvider } from 'src/store/reducers/userReducer';


const mapStateToProps = () => ({
});


const mapDispatchToProps = (dispatch) => ({
  showProvidersList: (theme) => {
  dispatch(showProvidersList(theme));
  dispatch(sendProvider());
  }, 
});

// Container
const ProvidersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Providers);

// == Export
export default ProvidersContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
