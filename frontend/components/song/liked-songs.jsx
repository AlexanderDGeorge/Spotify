import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions';
import Song from './song';

function LikedSongs(props) {

    const likes = (props.likes);
    const songIds = [];
    likes.forEach(like => {
        songIds.push(like.song_id)
    })

    useEffect(() => {
        songIds.forEach(songId => {
            props.fetchSong(songId)
        })
    }, [])

    console.log(props.songs);

    return (
        <div className="liked-songs">
            { props.songs.map(song => {
                return <Song song={song} key={song.id} />
            }) }
        </div>
    )
}

const mapState = state => ({
    likes: Object.values(state.entities.users[state.session.id].likes),
    songs: Object.values(state.entities.songs)
});

const mapDispatch = dispatch => ({
    fetchSong: songId => dispatch(fetchSong(songId)),
})

export default connect(mapState, mapDispatch)(LikedSongs);