import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { qNextSong, qPrevSong, qPlaySong, qPauseSong, qToggleRepeat, qToggleShuffle } from '../../actions/queue_actions';
import { MdSkipPrevious, MdPlayCircleOutline, MdSkipNext, MdShuffle, MdRepeat, MdPauseCircleOutline } from 'react-icons/md';
import { fetchSong } from '../../actions/song_actions';
import './player.css';

function Player(props) {
    const { queue, songs } = props;
    console.log(props.state);

    function handleControls() {
        let audio = document.getElementById("audio");
        if (queue.isPlaying) {
            audio.pause();
            props.pauseSong();
        } else {
            audio.play();
            props.playSong();
        }
    }

    function handleAudio() {
        let audio = document.getElementById("audio");
        if (audio.ended) {
            props.nextSong();
        }
    }

    function handleSource() {

    }

    if (songs.length > 0) {
        return (
            <div className="player">
                {/* <audio id="audio" src={songs[1].song_url}></audio> */}
                <MdShuffle />
                <MdSkipPrevious onClick={props.prevSong}/>
                {queue.isPlaying ? 
                    <MdPauseCircleOutline className="play-button" onClick={handleControls}/> : 
                    <MdPlayCircleOutline className="play-button" onClick={handleControls}/>
                }
                <MdSkipNext onClick={props.nextSong}/>
                <MdRepeat />
                {/* {handleAudio()} */}
            </div>
        )
    } else {
        return null;
    }
}

const mapState = state => ({
    queue: state.entities.queue,
    songs: Object.values(state.entities.songs),
    state: state
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