import React, { useState } from 'react';
import { createPlaylist } from '../../actions/playlist_actions';
import { connect } from 'react-redux';
import { FiMusic } from 'react-icons/fi';
import 'babel-polyfill';

function NewPlaylist(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    
    function handleSubmit() {
        props.createPlaylist({ user_id: props.user.id, name, description, img_url: imageUrl })
        props.history.push("/")
    }

    async function handleUpload(e) {
        const file = e.target.files[0];
        if (!file) return;
        
        const payload = await fetch(`http://localhost:3000/s3/direct_post`)
            .then(res => res.json()
        );
    
        const url = payload.url;
        const formData = new FormData();
    
        Object.keys(payload.fields).forEach(key =>
            formData.append(key, payload.fields[key])
        );
        formData.append('file', file);
    
        const xml = await fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.text());
    
        const uploadUrl = new DOMParser()
            .parseFromString(xml, 'application/xml')
            .getElementsByTagName('Location')[0].textContent;
    
        setImageUrl(uploadUrl);
    }

    return (
        <div className="new-playlist">
            <form onSubmit={handleSubmit}>
                <div className="new-playlist-header">
                    <h4>Create Playlist</h4>
                </div>
                { imageUrl ? 
                 <div className="new-playlist-img">
                    <img src={imageUrl}/>
                 </div> :
                 <div className="new-playlist-img">
                    <label htmlFor="image-upload">
                        <FiMusic />
                        Choose Image
                    </label>
                    <input 
                        id="image-upload"
                        type="file"
                        onChange={handleUpload}
                    />
                </div>}
                <div className="new-playlist-form">
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
                </div>
                <footer className="new-playlist-footer">
                    <button className="playlist-submit-button" type="submit">
                        CREATE
                    </button>
                </footer>
            </form>
        </div>
    )

}

const mapState = state => ({
    user: state.entities.user
});

const mapDispatch = dispatch => ({
    createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(mapState, mapDispatch)(NewPlaylist);