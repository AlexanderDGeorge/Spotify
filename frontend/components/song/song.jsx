import React, { useEffect, useState } from 'react';
import { fetchSong } from '../../actions/song_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdPlayCircleOutline } from 'react-icons/md';
import { GiSettingsKnobs } from 'react-icons/gi';

function Song(props) {

    const [open, setOpen] = useState(false);

    return (
        <div className="song">
            <MdPlayCircleOutline className="song-play"/>
            <p className="song-name">
                {props.song.name}
            </p>
            <Link className="song-artist" to={"/artists/" + props.song.artist_id}>
                {props.song.artist}
            </Link>
            <p className="song-duration">
                {props.song.duration}
            </p>
            <GiSettingsKnobs className="song-settings" onClick={() => setOpen(true)}/>
        </div>
    )
}

const mapDispatch = dispatch => ({
    fetchSong: songId => dispatch(fetchSong(songId))
});

export default connect(undefined, mapDispatch)(Song);