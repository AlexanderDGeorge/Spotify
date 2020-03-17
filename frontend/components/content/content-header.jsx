import React from 'react';
import { connect } from 'react-redux';
import { TiDeleteOutline } from 'react-icons/ti';
import { deletePlaylist } from '../../actions/playlist_actions';
import { qAddSongs } from '../../actions/queue_actions';

// takes in type (album playlist or artist) and an object prop

function ContentHeader(props) {    

    const { content, songs } = props

    function handleDelete() {
        props.deletePlaylist(content.id);
    }

    function handlePlayContent() {
        const queueSongs = [];
        content.songIds.forEach(songId => {
            queueSongs.push(songs[songId])
        });
        props.addSongstoQueue(queueSongs);
    }

    if (Object.values(songs).length) {
        return (
            <div className="content-header">
                <div className="header-img">
                    {content.img_url ? <img src={content.img_url} /> : <img src={window.defaultCover} />}
                </div>
                <div className="content-info">
                    {props.type === 'liked' ? null : <h4>{props.type.toUpperCase()}</h4>}
                    <h2>{content.name}</h2>
                    {props.type === 'liked' || props.type === 'artist' ? null : props.type === 'playlist' ? <h4>by {content.user.username}</h4> : <h4>by {content.artist}</h4>}
                    <div className="content-buttons">
                        <button className="content-play" onClick={handlePlayContent}>Play</button>
                        {props.type === 'playlist' ? <button className="content-delete" onClick={handleDelete}> <TiDeleteOutline /> </button> : null}
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

const mapState = state => ({
    songs: state.entities.songs,
})

const mapDispatch = dispatch => ({
    deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId)),
    addSongstoQueue: songs => dispatch(qAddSongs(songs))
})

export default connect(mapState, mapDispatch)(ContentHeader);