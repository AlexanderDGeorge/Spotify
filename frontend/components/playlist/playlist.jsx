import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPlaylist } from '../../actions/playlist_actions';
import './playlist.css';
import Song from '../song/song';

function Playlist(props) {
    
    useEffect(() => {
        props.fetchPlaylist(props.match.params.id)
    }, []);
    
    let playlist = (props.playlists[props.match.params.id])
    console.log(playlist)
    if (!playlist) return null;
    else {
        return (
            <div className="playlist">
                <div className="playlist-header">
                    HEADER
                    { playlist.name }
                </div>
                <div>
                    { playlist.song_ids.map(song_id => {
                        return (
                            <Song id={song_id} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapState = state => ({
    playlists: state.entities.playlists
});

const mapDispatch = dispatch => ({
    fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId))
})

export default connect(mapState, mapDispatch)(Playlist);