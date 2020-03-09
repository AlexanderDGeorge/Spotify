import React from 'react';
import TopBarContainer from '../topbar/topbar';
import './landing.css'
import { connect } from 'react-redux';

function Landing(props) {
  return (
    <div className="landing">
      <TopBarContainer />
    </div>
  )
}

const mapState = state => ({
  currentUser: state.entities.users[state.session.id]
});

export default connect(mapState, null)(Landing);