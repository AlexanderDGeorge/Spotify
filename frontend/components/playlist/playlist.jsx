import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPlaylist } from '../../actions/playlist_actions';
import './playlist.css';
import Song from '../song/song';
import ContentHeader from '../content/content-header';
import { fetchSongs } from '../../actions/song_actions';

function Playlist(props) {
    
    console.log(props);
    useEffect(() => {
        props.fetchSongs()
        props.fetchPlaylist(props.match.params.id)
    }, []);
    
    let playlist = (props.playlists[props.match.params.id])
    const { songs } = props;
    if (!playlist || songs.length === 0) return null;
    else {
        return (
            <div className="playlist">
                <ContentHeader type={'playlist'} content={playlist} />
                <div>
                    { playlist.song_ids.map(song_id => {
                        console.log(songs[song_id])
                        return (
                            <Song song={songs[song_id]} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapState = state => ({
    playlists: state.entities.playlists,
    songs: Object.values(state.entities.songs),
});

const mapDispatch = dispatch => ({
    fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
    fetchSongs: () => dispatch(fetchSongs()),
})

export default connect(mapState, mapDispatch)(Playlist);