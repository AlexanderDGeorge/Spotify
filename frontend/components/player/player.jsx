import React, { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/like_actions';
import { qNextSong, qPrevSong, qPlaySong, qPauseSong } from '../../actions/queue_actions';
import { MdSkipPrevious, MdPlayCircleOutline, MdSkipNext, MdShuffle, MdRepeat, MdPauseCircleOutline, MdVolumeUp } from 'react-icons/md';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import './player.css';

function Player(props) {

    const { queue, songs, likes } = props;
    const [url, setUrl] = useState(null);
    const [volume, setVolume] = useState(0.8);
    const [played, setPlayed] = useState(0);
    const [duration, setDuration] = useState('0:00');
    const [seeking, setSeeking] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [loop, setLoop] = useState(false);
    const player = useRef(null);

    const songIds = [];
    likes.forEach(like => {
        songIds.push(like.song_id)
    });

    useEffect(() => {
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
        player.current.seekTo(parseFloat(e.target.value), 'seconds')
    }

    function handleProgress(val) {
        let seconds = val.playedSeconds;
        if (!seeking) {
            let minutes = Math.floor(seconds / 60)
            seconds = seconds - minutes;
            seconds = Math.floor(seconds * 0.6);
            let time = seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
            setDuration(time);
            setPlayed(val.played);
        }
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

    function handleLike() {
        if (songIds.includes(queue.songArray[queue.index].id)) {
            let like = likes[songIds.indexOf(queue.songArray[queue.index].id)]
            props.unlikeSong(like)
        } else {
            props.likeSong({ user_id: props.userId, song_id: queue.songArray[queue.index].id })
        }
    }

    function isLiked() {
        return songIds.includes(queue.songArray[queue.index].id)
    }

    return (
        <div className="player">
            <ReactPlayer 
                className='react-player'
                width='0'
                height='0'
                ref={player}
                url={url}
                playing={queue.playing}
                loop={loop}
                volume={volume}
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handleNext}
                onProgress={handleProgress}
            />
            {queue.songArray.length ? 
                <div className="info">
                    <p>
                        {queue.songArray[queue.index].name}
                        {isLiked() ? <IoMdHeart color="white" className="song-button" onClick={handleLike} /> : <IoMdHeartEmpty className="song-button" onClick={handleLike}/> } 
                    </p>
                    <Link to={"/artists/" + queue.songArray[queue.index].artist_id}>{queue.songArray[queue.index].artist}</Link>
                </div> : null
            }
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
            {queue.songArray.length ?
                <div className="duration">
                    {duration}
                    <input 
                        type="range" min={0} max={1} step='any'
                        value={played}
                        onMouseDown={handleSeekMouseDown}
                        onChange={handleSeekChange}
                        onMouseUp={handleSeekMouseUp}
                    />
                    {queue.songArray[queue.index].duration}
                </div> : null}
            <div className="volume">
                <MdVolumeUp className="controls-svg"/>
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
    likes: Object.values(state.entities.user.likes),
    userId: state.entities.user.id,
});

const mapDispatch = dispatch => ({
    nextSong: () => dispatch(qNextSong()),
    prevSong: () => dispatch(qPrevSong()),
    playSong: () => dispatch(qPlaySong()),
    pauseSong: () => dispatch(qPauseSong()),
    likeSong: like => dispatch(createLike(like)),
    unlikeSong: likeId => dispatch(deleteLike(likeId)),
});

export default connect(mapState, mapDispatch)(Player);