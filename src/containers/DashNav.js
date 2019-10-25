// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import DashNav from 'src/components/DashNav';


// Action Creators
// import { doSomething } from 'src/store/reducers/userReducer';


const mapStateToProps = (state) => ({
  projectName: state.userReducer.name,
});


const mapDispatchToProps = (dispatch) => ({
  // doSomething: () => {
  //   dispatch(doSomething('Coucou'));
  // },
});

// Container
const DashNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashNav);

// == Export
export default DashNavContainer;


