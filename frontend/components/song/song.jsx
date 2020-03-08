import React, { useEffect } from 'react';
import { fetchSong } from '../../actions/song_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Song(props) {

    console.log(props.song.artist)

    return (
        <div className="song">
            <p className="song-name">
                {props.song.name}
            </p>
            <Link className="song-artist" to={"/artists/" + props.song.artist_id}>
                {props.song.artist}
            </Link>
            <p className="song-duration">
                {props.song.duration}
            </p>
        </div>
    )
}

const mapDispatch = dispatch => ({
    fetchSong: songId => dispatch(fetchSong(songId))
});

export default connect(undefined, mapDispatch)(Song);