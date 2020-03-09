import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPlaylist } from '../../actions/playlist_actions';
import './playlist.css';
import Song from '../song/song';
import ContentHeader from '../content/content-header';

function Playlist(props) {
    
    useEffect(() => {
        props.fetchPlaylist(props.match.params.id)
    }, []);
    
    let playlist = (props.playlists[props.match.params.id])
    if (!playlist) return null;
    else {
        return (
            <div className="playlist">
                <ContentHeader type={'playlist'} content={playlist} />
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