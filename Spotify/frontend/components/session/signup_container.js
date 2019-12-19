import { connect } from 'react-redux';
import { createUser } from '../../actions/session_actions';
import Signup from './signup';

const mapDispatch = dispatch => ({
  signup: user => dispatch(createUser(user))
});

export default connect(undefined, mapDispatch)(Signup)