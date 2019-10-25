// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Budget from 'src/components/Budget';

// Action Creators
import { deleteProvider } from 'src/store/reducers/userReducer';


const mapStateToProps = (state) => ({
  budgetForecast: state.userReducer.budgetForecast,
  budgetCurrent: state.userReducer.budgetCurrent,
  providersAdded: state.userReducer.providersAdded,

});


const mapDispatchToProps = (dispatch) => ({
  deleteProvider: (id) => {
  dispatch(deleteProvider(id));
  },
});

// Container
const BudgetContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Budget);

// == Export
export default BudgetContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
