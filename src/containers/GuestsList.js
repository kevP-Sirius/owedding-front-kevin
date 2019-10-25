// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import GuestsList from 'src/components/GuestsList';

// Action Creators
import {
  changeValue, deleteGuest, putGuestId, getSortedList, guestTypeError,
  guestSubmit, guestTypeErrorFalse, sendNewsletter,
} from 'src/store/reducers/userReducer';


const mapStateToProps = (state) => ({
  guestLastName: state.userReducer.guestLastName,
  guestFirstName: state.userReducer.guestFirstName,
  guestType: state.userReducer.guestType,
  guestEmail: state.userReducer.guestEmail,
  guestTypeError: state.userReducer.guestTypeError,
  dataGuests: getSortedList(state.userReducer.guests),
  newsletterSent: state.userReducer.newsletterSent,
});


const mapDispatchToProps = (dispatch) => ({
  changeValue: (value, name) => {
  dispatch(changeValue(value, name));
  },
  submitGuestListVerif: (guestType) => {
    if (guestType === '') {     
      dispatch(guestTypeError());
    } else {
      dispatch(guestTypeErrorFalse());
      dispatch(guestSubmit());
    }
  },
  deleteGuest: (id) => {
    dispatch(putGuestId(id));
    dispatch(deleteGuest());
  },
  sendNewsletter: () => {
    dispatch(sendNewsletter());
  },
});

// Container
const GuestsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GuestsList);

// == Export
export default GuestsListContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
