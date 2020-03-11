import React, { useState } from 'react';
import { fetchSong } from '../../actions/song_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdPlayCircleOutline } from 'react-icons/md';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { GiSettingsKnobs } from 'react-icons/gi';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createPlaylistSong, deletePlaylistSong } from '../../actions/playlist_song_actions';
import SongDropdown from './song-dropdown';
import { qPlayNow, qPauseSong, qPlaySong } from '../../actions/queue_actions';

function Song(props) {

    const { likes, song } = props;
    const [open, setOpen] = useState(false);
    const songIds = [];
    likes.forEach(like => {
        songIds.push(like.song_id)
    });

    function handleLike() {
        if (songIds.includes(song.id)) {
            let like = likes[songIds.indexOf(song.id)]
            props.unlikeSong(like)
        } else {
            props.likeSong({ user_id: props.userId, song_id: song.id })
        }
    }

    function handlePlay() {
        if (props.currentSong === song.id) {
            if (props.isPlaying) {
                props.pauseSong()
            } else {
                props.playSong()
            }
        } else {
            props.playNow(song.id);
        }
    }

    function isLiked() {
        if (songIds.includes(song.id)) {
            return true;
        } else {
            return false;
        }
    }

    function isPlaying() {
        return props.isPlaying && props.currentSong === song.id ? true : false;
    }

    return (
        <div className="song">
            <MdPlayCircleOutline className="song-button" onClick={handlePlay} color={isPlaying() ? "limegreen" : "" }/>
            {isLiked() ? <IoMdHeart color="white" className="song-button" onClick={handleLike} /> : <IoMdHeartEmpty className="song-button" onClick={handleLike}/> } 
            <p className="song-name">
                {song.name}
            </p>
            <Link className="song-artist" to={"/artists/" + song.artist_id}>
                {song.artist}
            </Link>
            <Link className="song-album" to={"/albums/" + song.album_id}>
                {song.album}
            </Link>
            <p className="song-duration">
                {song.duration}
            </p>
            <GiSettingsKnobs className="song-button" onClick={() => setOpen(!open)}/>
            {open ? <SongDropdown setOpen={val => setOpen(val)} song={song} /> : null}
        </div>
    )
}

const mapState = state => ({
    userId: state.session.id,
    likes: Object.values(state.entities.user.likes),
    currentSong: state.queue.currentSong,
    isPlaying: state.queue.isPlaying,
})

const mapDispatch = dispatch => ({
    fetchSong: songId => dispatch(fetchSong(songId)),
    likeSong: like => dispatch(createLike(like)),
    unlikeSong: likeId => dispatch(deleteLike(likeId)),
    addToPlaylist: song => dispatch(createPlaylistSong(song)),
    removeFromPlaylist: songId => dispatch(deletePlaylistSong(songId)),
    playNow: songId => dispatch(qPlayNow(songId)),
    pauseSong: () => dispatch(qPauseSong()),
    playSong: () => dispatch(qPlaySong()),
});

export default connect(mapState, mapDispatch)(Song);