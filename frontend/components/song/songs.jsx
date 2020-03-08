import React, { useEffect } from 'react';
import { fetchSongs } from '../../actions/song_actions';
import { connect } from 'react-redux';
import Song from './song';
import './song.css';

function Songs(props) {

    useEffect(() => {
        props.fetchSongs()
    }, []);

    let songs = props.songs;

    if (!songs) return null;
    else {
        return (
            <div className="songs">
                { songs.map(song => {
                    return <Song song={song} key={song.id} />
                })}
            </div>
        )
    }
}

const mapState = state => ({
    songs: Object.values(state.entities.songs),
});

const mapDispatch = dispatch => ({
    fetchSongs: props => dispatch(fetchSongs(props))
});

export default connect(mapState, mapDispatch)(Songs);