import React from 'react';
import { fetchPlaylists } from '../../utils/playlist_util';
import { connect } from 'react-redux';

function Playlists(props) {

    const playlists = props.fetchPlaylists(props.currentUser.id);

    return (
        <div className="playlists">

        </div>
    )
}

const mapState = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatch = dispatch => ({
    fetchPlaylists: userId => dispatch(fetchPlaylists(userId))
});

export default connect(mapState, mapDispatch)(Playlists);