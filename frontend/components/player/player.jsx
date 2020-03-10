import React from 'react';
import { connect } from 'react-redux'
import { qNextSong, qAddSong, qPrevSong, qPlaySong, qPauseSong } from '../../actions/queue_actions';

function Player(props) {
    return (
        <div className="player">
            
        </div>
    )
}

const mapState = state => ({
    queue: state.entities.queue,
});

const mapDispatch = dispatch => ({
    addSong: songId => dispatch(qAddSong(songId)),
    nextSong: () => dispatch(qNextSong()),
    prevSong: () => dispatch(qPrevSong()),
    playSong: () => dispatch(qPlaySong()),
    pauseSong: () => dispatch(qPauseSong()),
});

export default connect(mapState, mapDispatch)(Player);