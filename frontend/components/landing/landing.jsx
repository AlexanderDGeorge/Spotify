import React from 'react';
import TopBarContainer from '../top-bar/top_bar_container';
import './landing.css'
import { connect } from 'react-redux';

function Landing(props) {
  console.log(props);
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