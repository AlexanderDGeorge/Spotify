import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { qAddSong } from '../../actions/queue_actions';


function SongDropdown(props) {
    const ref = useRef(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        }
    })

    function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
            props.setOpen(false);
        }
    }

    return (
        <div className="song-dropdown" ref={ref}>
            <p className="song-option" onClick={() => props.addSongToQueue(props.song.id)} >Add to Queue</p>
            <Link className="song-option" to={"/artists/" + props.song.artist_id}>Go to Artist</Link>
            <Link className="song-option" to={"/albums/" + props.song.album_id}>Go to Album</Link>
            <p className="song-option">Remove from Liked Songs</p>
            <p className="song-option">Add to Playlist</p>
        </div>
    )
}

const mapState = state => ({
    queue: state.entities.queue,
});

const mapDispatch = dispatch => ({
    addSongToQueue: songId => dispatch(qAddSong(songId)),
})

export default connect(mapState, mapDispatch)(SongDropdown);