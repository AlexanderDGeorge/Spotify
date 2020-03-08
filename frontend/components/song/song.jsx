import React, { useEffect, useState } from 'react';
import { fetchSong } from '../../actions/song_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdPlayCircleOutline } from 'react-icons/md';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { GiSettingsKnobs } from 'react-icons/gi';
import { createLike, deleteLike } from '../../actions/like_actions';

function Song(props) {

    const [open, setOpen] = useState(false);

    function handleLike() {
        console.log('before likeSong')
        props.likeSong({ user_id: props.userId, song_id: props.song.id })
        console.log('after handleLike')
    }

    return (
        <div className="song">
            <MdPlayCircleOutline className="song-button"/>
            <IoMdHeartEmpty className="song-button" onClick={handleLike}/> 
            <p className="song-name">
                {props.song.name}
            </p>
            <Link className="song-artist" to={"/artists/" + props.song.artist_id}>
                {props.song.artist}
            </Link>
            <p className="song-duration">
                {props.song.duration}
            </p>
            <GiSettingsKnobs className="song-button" onClick={() => setOpen(true)}/>
        </div>
    )
}

const mapState = state => ({
    userId: () => state.session.id
})

const mapDispatch = dispatch => ({
    fetchSong: songId => dispatch(fetchSong(songId)),
    likeSong: like => dispatch(createLike(like)),
    unlikeSong: likeId => dispatch(deleteLike(likeId)),
});

export default connect(mapState, mapDispatch)(Song);