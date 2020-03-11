import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPlaylist } from '../../actions/playlist_actions';
import Song from '../song/song';
import ContentHeader from '../content/content-header';
import { fetchSongs } from '../../actions/song_actions';
import './playlist.css';

function Playlist(props) {

    const { playlists, songs } = props;
    const playlist = playlists[props.match.params.id];
    
    useEffect(() => {
        props.fetchSongs()
        props.fetchPlaylist(props.match.params.id)
    }, []);
    
    if (playlist && !!Object.values(songs).length) {
        return (
            <div className="playlist">
                <ContentHeader type={'playlist'} content={playlist} />
                <div>
                    { playlist.song_ids.map(song_id => {
                        return (
                            <Song song={songs[song_id]} key={song_id} />
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return null
    }
}

const mapState = state => ({
    playlists: state.entities.playlists,
    songs: state.entities.songs,
});

const mapDispatch = dispatch => ({
    fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
    fetchSongs: () => dispatch(fetchSongs()),
})

export default connect(mapState, mapDispatch)(Playlist);