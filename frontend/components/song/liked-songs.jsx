import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions';
import Song from './song';
import ContentHeader from '../content/content-header';

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

    return (
        <div className="liked-songs">
            <ContentHeader content={{ name: 'Liked Songs' }} type={'liked'}/>
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