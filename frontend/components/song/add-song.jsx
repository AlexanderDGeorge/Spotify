import React from 'react' ;
import { createPlaylistSong } from '../../actions/playlist_song_actions';

function AddSong(props) {

    return (
        <div className="add-song">

        </div>
    )
}

const mapDispatch = dispatch => ({
    addSong: props => dispatch(createPlaylistSong(props))
});

export default connect(undefined, mapDispatch)(AddSong);