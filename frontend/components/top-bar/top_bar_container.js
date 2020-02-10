import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import TopBar from './top_bar';

const mapState = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatch = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(mapState, mapDispatch)(TopBar)