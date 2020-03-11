import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { qNextSong, qPrevSong, qPlaySong, qPauseSong, qToggleRepeat, qToggleShuffle } from '../../actions/queue_actions';
import { MdSkipPrevious, MdPlayCircleOutline, MdSkipNext, MdShuffle, MdRepeat, MdPauseCircleOutline } from 'react-icons/md';
import { fetchSongs } from '../../actions/song_actions';
import './player.css';

function Player(props) {
    const { queue, songs } = props;
    const audio = document.getElementById("audio");

    useEffect(() => {
        props.fetchSongs();
    }, []);

    function handleControls() {
        if (queue.isPlaying) {
            audio.pause();
            props.pauseSong();
        } else {
            audio.play();
            props.playSong();
        }
    }

    function handlePrev() {
        if (audio.currentTime > 3) {
            audio.currentTime = 0;
        } else {
            props.prevSong();
        }
    }

    function handleNext() {
        props.nextSong();
        if (queue.priority.length == 0 && queue.shuffledQ.length == 0) {
            audio.pause();
            props.pauseSong();
        }
    }

    function handleSource() {
        // debugger
        if (queue.priority.length === 0) {
            if (queue.shuffledQ.length === 0) return null;
            else return queue.shuffledQ[queue.queueIndex];
        } else {
            return songs[queue.priority[0]].song_url;
        }
        
        // if (!queue.currentSong) { 
        //     props.nextSong();
        //     // console.log('here')
        // }
        // return queue.currentSong ? songs[queue.currentSong].song_url : queue.shuffledQ[queue.queueIndex];
    }

    function handleRepeat() {
        props.toggleRepeat();
        audio.loop();
    }

    if (songs) {
        return (
            <div className="player">
                <audio id="audio" autoPlay={queue.isPlaying} src={handleSource()} onEnded={handleNext}></audio>
                <MdShuffle />
                <MdSkipPrevious onClick={handlePrev}/>
                {queue.isPlaying ? 
                    <MdPauseCircleOutline className="play-button" onClick={handleControls}/> : 
                    <MdPlayCircleOutline className="play-button" onClick={handleControls}/>
                }
                <MdSkipNext onClick={handleNext}/>
                <MdRepeat onClick={handleRepeat} style={props.repeat ? { color: "limegreen" } : { color: "#aaaaaa" }}/>
            </div>
        )
    } else {
        return null;
    }
}

const mapState = state => ({
    queue: state.queue,
    songs: state.entities.songs,
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