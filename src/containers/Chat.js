// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Chat from 'src/components/Chat';

// Action Creators
// import { doSomething } from 'src/store/reducers/userReducer';


const mapStateToProps = (state) => ({

    username: state.userReducer.username,
});


const mapDispatchToProps = (dispatch) => ({
  // doSomething: () => {
  //   dispatch(doSomething('Coucou'));
  // },
});

// Container
const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);

// == Export
export default ChatContainer;


