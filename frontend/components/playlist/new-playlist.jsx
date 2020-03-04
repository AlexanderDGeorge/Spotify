import React, { useState } from 'react';
import { createPlaylist } from '../../utils/playlist_util';
import { connect } from 'react-redux';

function NewPlaylist() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit() {

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

const mapDispatch = dispatch => ({
    createPlaylist: playlist => dispatch(createPlaylist(playlist))
})

export default connect(null, mapDispatch)(NewPlaylist);