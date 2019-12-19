import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import TopBar from './top_bar';

// implement whether to import signup or login based on current user

const mapState = state => ({
  currentUser: state.session.currentUser
});

const mapDispatch = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(mapState, mapDispatch)(TopBar)