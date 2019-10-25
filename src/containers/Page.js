// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Page from 'src/components/Page';

// Action Creators
// import { doSomething } from 'src/store/reducers/userReducer';


const mapStateToProps = (state) => ({
  logged: state.userReducer.logged,
  projectName: state.userReducer.projectName,
});


const mapDispatchToProps = (dispatch) => ({
  // doSomething: () => {
  //   dispatch(doSomething('Coucou'));
  // },
});

// Container
const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

// == Export
export default PageContainer;


