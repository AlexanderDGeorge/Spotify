import React, { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import { qNextSong, qPrevSong, qPlaySong, qPauseSong, qToggleRepeat, qToggleShuffle } from '../../actions/queue_actions';
import { MdSkipPrevious, MdPlayCircleOutline, MdSkipNext, MdShuffle, MdRepeat, MdPauseCircleOutline } from 'react-icons/md';
import './player.css';

function Player(props) {

    const { queue, songs } = props;
    const [url, setUrl] = useState(null);
    const [volume, setVolume] = useState(0.8);
    const [played, setPlayed] = useState(0);
    const [loaded, setLoaded] = useState(0);
    const [duration, setDuration] = useState(0);
    const [seeking, setSeeking] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [loop, setLoop] = useState(false);
    const player = useRef(null);

    useEffect(() => {
        console.log('queue change')
        if (queue.songArray.length) setUrl(queue.songArray[queue.index].song_url)
    }, [queue])

    function handlePlayPause() {
        queue.playing ? handlePause() : handlePlay();
    }

    function handleToggleShuffle() {
        setShuffle(!shuffle)
    }

    function handleToggleLoop() {
        setLoop(!loop)
    }

    function handleVolumeChange(e) {
        setVolume(parseFloat(e.target.value))
    }

    function handlePlay() {
        props.playSong();
    }

    function handlePause() {
        props.pauseSong();
    }

    function handleSeekMouseDown(e) {
        setSeeking(true);
    }

    function handleSeekChange(e) {
        setPlayed(parseFloat(e.target.value))
    }

    function handleSeekMouseUp(e) {
        setSeeking(false);
        player.seekTo(parseFloat(e.target.value))
    }

    function handleProgress(val) {
        // handleProgress = state => {
        //     console.log('onProgress', state)
        //     // We only want to update time slider if we are not currently seeking
        //     if (!this.state.seeking) {
        //       this.setState(state)
        //     }
        // }
    }

    function handleEnded() {
        handleNext();
    }

    function handleDuration(dur) {
        setDuration(dur)
    }

    function handlePrev() {
        if (queue.songArray.length && !loop) {
            props.prevSong();
        }
    }

    function handleNext() {
        if (queue.songArray.length && !loop) {
            props.nextSong();
        }
    }

    return (
        <div className="player">
            <ReactPlayer 
                width='0'
                height='0'
                ref={player}
                className='react-player'
                url={url}
                playing={queue.playing}
                loop={loop}
                volume={volume}
                onStart={() => console.log('onStart')}
                onPlay={handlePlay}
                onPause={handlePause}
                onBuffer={() => console.log('onBuffer')}
                onSeek={e => console.log('onSeek', e)}
                onEnded={handleEnded}
                onError={e => console.log('onError', e)}
                onProgress={handleProgress}
                onDuration={handleDuration}
            />
            <div className="info">
                <span>{queue.songArray.length ? queue.songArray[queue.index].name : null}</span>
                <span>{queue.songArray.length ? queue.songArray[queue.index].artist : null}</span>
            </div>
            <div className="controls">
                <MdShuffle className={shuffle ? "toggle-button" : "controls-svg"} onClick={handleToggleShuffle}/>
                <MdSkipPrevious className="controls-svg" onClick={handlePrev}/>
                {queue.playing ? 
                    <MdPauseCircleOutline className="play-button" onClick={handlePlayPause}/> : 
                    <MdPlayCircleOutline className="play-button" onClick={handlePlayPause}/>
                }
                <MdSkipNext className="controls-svg" onClick={handleNext}/>
                <MdRepeat className={loop ? "toggle-button" : "controls-svg"} onClick={handleToggleLoop}/>

            </div>
            {/* <div className="duration">
                <input 
                    type="range" min={0} max={1} step='any'
                    value={played}
                    onMouseDown={handleSeekMouseDown}
                    onChange={handleSeekChange}
                    onMouseUp={handleSeekMouseUp}
                />
            </div> */}
            <div className="volume">
                <input 
                    type="range" min={0} max={1} step='any'
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>
        </div>
    )
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
});

export default connect(mapState, mapDispatch)(Player);