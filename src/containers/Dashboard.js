// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Dashboard from 'src/components/Dashboard';


// Action Creators
// import { doSomething } from 'src/store/reducers/userReducer';


const mapStateToProps = (state) => ({
  project_status: state.userReducer.project_status,
});


const mapDispatchToProps = (dispatch) => ({
  // doSomething: () => {
  //   dispatch(doSomething('Coucou'));
  // },
});

// Container
const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

// == Export
export default DashboardContainer;


