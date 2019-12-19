import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import Login from './login';

const mapDispatch = dispatch => ({
  login: user => dispatch(loginUser(user))
});

export default connect(undefined, mapDispatch)(Login)