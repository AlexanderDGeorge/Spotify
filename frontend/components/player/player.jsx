import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { qNextSong, qPrevSong, qPlaySong, qPauseSong, qToggleRepeat, qToggleShuffle } from '../../actions/queue_actions';
import { MdSkipPrevious, MdPlayCircleOutline, MdSkipNext, MdShuffle, MdRepeat, MdPauseCircleOutline } from 'react-icons/md';
import { fetchSong } from '../../actions/song_actions';
import './player.css';

function Player(props) {
    const { queue, songs } = props;

    function handleControls() {
        let audio = document.getElementById("audio");
        console.log(audio)
        if (queue.isPlaying) {
            audio.pause();
            props.pauseSong();
        } else {
            audio.play();
            props.playSong();
        }
    }
    
    console.log(props)
    
    return (
        <div className="player">
            {queue.queue.length > 0 ? <audio id="audio" src={songs[1].song_url}></audio> : null}
            <MdShuffle />
            <MdSkipPrevious onClick={props.prevSong}/>
            {queue.isPlaying ? 
                <MdPauseCircleOutline className="play-button" onClick={handleControls}/> : 
                <MdPlayCircleOutline className="play-button" onClick={handleControls}/>
            }
            <MdSkipNext onClick={props.nextSong}/>
            <MdRepeat />
        </div>
    )
}

const mapState = state => ({
    queue: state.entities.queue,
    songs: Object.values(state.entities.songs),
});

const mapDispatch = dispatch => ({
    nextSong: () => dispatch(qNextSong()),
    prevSong: () => dispatch(qPrevSong()),
    playSong: () => dispatch(qPlaySong()),
    pauseSong: () => dispatch(qPauseSong()),
    toggleShuffle: () => dispatch(qToggleShuffle()),
    toggleRepeat: () => dispatch(qToggleRepeat()),
    getSong: songId => dispatch(fetchSong(songId)),
});

export default connect(mapState, mapDispatch)(Player);