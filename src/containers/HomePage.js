// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import HomePage from 'src/components/HomePage';

// Action Creators
// import { doSomething } from 'src/store/reducers/userReducer';


const mapStateToProps = (state) => ({
  logged: state.userReducer.logged,
});


const mapDispatchToProps = (dispatch) => ({
  // doSomething: () => {
  //   dispatch(doSomething('Coucou'));
  // },
});

// Container
const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

// == Export
export default HomePageContainer;


