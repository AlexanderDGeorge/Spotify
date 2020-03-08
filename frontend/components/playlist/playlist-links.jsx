import React, { useEffect } from 'react';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function PlaylistLinks(props) {
    
    useEffect(() => {
        props.fetchPlaylists();
    }, []);

    return (
        <div className="playlist-links">
            { props.playlists.map(playlist => {
                return (
                    <Link className="playlist-link" to={'/playlists/' + playlist.id} key={playlist.id}>
                        { playlist.name }
                    </Link>
                )
            })}
        </div>
    )
}

const mapState = state => ({
    playlists: Object.values(state.entities.playlists)
});

const mapDispatch = dispatch => ({
    fetchPlaylists: props => dispatch(fetchPlaylists(props))
});

export default connect(mapState, mapDispatch)(PlaylistLinks);