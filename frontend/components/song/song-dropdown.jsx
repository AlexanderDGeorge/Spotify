import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { qAddSong } from '../../actions/queue_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createPlaylistSong } from '../../actions/playlist_song_actions';


function SongDropdown(props) {
    const ref = useRef(null);
    const { song, user, likes, playlists } = props;
    const [hover, setHover] = useState(false);
    const songIds = [];
    likes.forEach(like => {
        songIds.push(like.song_id)
    })

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

    function handleLike() {
        if (songIds.includes(song.id)) {
            let like = likes[songIds.indexOf(song.id)]
            props.unlikeSong(like)
        } else {
            props.likeSong({ user_id: user.id, song_id: song.id })
        }
    }

    function showPlaylists() {
        return (
            <div>
                <p>Add to Playlist</p>
                <div className="playlist-show">
                    {playlists.map(playlist => 
                        <p key={playlist.id} 
                            onClick={() => props.addToPlaylist({
                                playlist_id: playlist.id,
                                song_id: song.id
                            })}
                        >{playlist.name}</p>
                    )}
                </div>
            </div>
        )
    }

    function isLiked() {
        if (songIds.includes(song.id)) {
            return 'Remove from Liked Songs'
        } else {
            return 'Add to Liked Songs'
        }
    }

    return (
        <div className="song-dropdown" ref={ref}>
            <p className="song-option" onClick={() => {props.addSongToQueue(song.id); props.setOpen(false)}} >Add to Queue</p>
            <Link className="song-option" to={"/artists/" + song.artist_id}>Go to Artist</Link>
            <Link className="song-option" to={"/albums/" + song.album_id}>Go to Album</Link>
            <p className="song-option" onClick={handleLike}>{isLiked()}</p>
            <div className="song-option" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                {hover ? showPlaylists() : <p>Add to Playlist</p>}
            </div>
        </div>
    )
}

const mapState = state => ({
    queue: state.queue,
    user: state.entities.user,
    likes: Object.values(state.entities.user.likes),
    playlists: Object.values(state.entities.playlists),
});

const mapDispatch = dispatch => ({
    addSongToQueue: songId => dispatch(qAddSong(songId)),
    likeSong: like => dispatch(createLike(like)),
    unlikeSong: like => dispatch(deleteLike(like)),
    addToPlaylist: playlistSong => dispatch(createPlaylistSong(playlistSong))
})

export default connect(mapState, mapDispatch)(SongDropdown);