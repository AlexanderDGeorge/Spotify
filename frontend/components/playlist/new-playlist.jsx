import React, { useState } from 'react';
import { createPlaylist } from '../../utils/playlist_util';
import { connect } from 'react-redux';

function NewPlaylist(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    console.log(props)

    function handleSubmit() {
        props.createPlaylist({ user_id: props.currentUser.id, title, description })
        props.history.push("/")
    }

    return (
        <form className="new-playlist" onSubmit={handleSubmit}>
            <input 
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="title"
                autoFocus
                required    
            />
            <input 
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="description"
            />
            <button type="submit">
                Create
            </button>
        </form>
    )

}

const mapState = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatch = dispatch => ({
    createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(mapState, mapDispatch)(NewPlaylist);