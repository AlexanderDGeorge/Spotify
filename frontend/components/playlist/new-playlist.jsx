import React, { useState } from 'react';
import { createPlaylist } from '../../actions/playlist_actions';
import { connect } from 'react-redux';

function NewPlaylist(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    
    console.log(props)

    function handleSubmit() {
        props.createPlaylist({ user_id: props.currentUser.id, name, description })
        props.history.push("/")
    }

    return (
        <form className="new-playlist" onSubmit={handleSubmit}>
            <input 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="name"
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