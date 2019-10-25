// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import TablePlan from 'src/components/TablePlan';

// Action Creators
import {
  changeValue, deleteGuest, putGuestId, getSortedList, guestTypeError,
  guestSubmit, guestTypeErrorFalse,
} from 'src/store/reducers/userReducer';
import { sort } from 'src/store/reducers/listReducer';



const mapStateToProps = (state) => ({
  
  //dataGuests: getSortedList(state.userReducer.guests),
  lists: state.listReducer,
});


const mapDispatchToProps = (dispatch) => ({
  sort: (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
  ) => {
  dispatch(sort(
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
  ));
  },
 
  deleteGuest: (id) => {
    dispatch(putGuestId(id));
    dispatch(deleteGuest());
  },
});

// Container
const TablePlanContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TablePlan);

// == Export
export default TablePlanContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
