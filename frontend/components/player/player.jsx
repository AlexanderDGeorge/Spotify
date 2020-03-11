import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { qNextSong, qPrevSong, qPlaySong, qPauseSong, qToggleRepeat, qToggleShuffle } from '../../actions/queue_actions';
import { MdSkipPrevious, MdPlayCircleOutline, MdSkipNext, MdShuffle, MdRepeat, MdPauseCircleOutline } from 'react-icons/md';
import { fetchSongs } from '../../actions/song_actions';
import './player.css';

function Player(props) {
    const { queue, songs } = props;

    useEffect(() => {
        props.fetchSongs()
    }, []);

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

    function handlePrev() {
        let audio = document.getElementById("audio");
        props.prevSong();
        audio.play();
    }

    function handleNext() {
        let audio = document.getElementById("audio");
        props.nextSong();
        
        audio.play();
    }

    function handleSource() {
        if (queue.priority.length === 0) {
            if (queue.shuffledQ.length === 0) return null;
            else return queue.shuffledQ[queue.queueIndex];
        } else {
            return songs[queue.priority[0] - 1].song_url;
        }
    }

    if (songs.length > 0) {
        return (
            <div className="player">
                <audio id="audio" src={handleSource()} onEnded={handleNext}></audio>
                <MdShuffle />
                <MdSkipPrevious onClick={handlePrev}/>
                {queue.isPlaying ? 
                    <MdPauseCircleOutline className="play-button" onClick={handleControls}/> : 
                    <MdPlayCircleOutline className="play-button" onClick={handleControls}/>
                }
                <MdSkipNext onClick={handleNext}/>
                <MdRepeat />
            </div>
        )
    } else {
        return null;
    }
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
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(mapState, mapDispatch)(Player);