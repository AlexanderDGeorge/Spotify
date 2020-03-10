import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { deletePlaylist } from '../../actions/playlist_actions';
import { connect } from 'react-redux';

// takes in type (album playlist or artist) and an object prop

function ContentHeader(props) {

    const { content } = props

    function handleDelete() {
        props.deletePlaylist(content.id);
    }

    return (
        <div className="content-header">
            <div className="header-img">
                {content.img_url ? <img src={content.img_url} /> : <img src={window.defaultCover} />}
            </div>
            <div className="content-info">
                {props.type === 'liked' ? null : <h4>{props.type.toUpperCase()}</h4>}
                <h2>{content.name}</h2>
                {props.type === 'liked' ? null : <h4>by {content.user.username}</h4>}
                <div className="content-buttons">
                    <button className="content-play">Play</button>
                    {props.type === 'playlist' ? <button className="content-delete" onClick={handleDelete}> <TiDeleteOutline /> </button> : null}
                </div>
            </div>
        </div>
    )
}

const mapDispatch = dispatch => ({
    deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId))
})

export default connect(undefined, mapDispatch)(ContentHeader);