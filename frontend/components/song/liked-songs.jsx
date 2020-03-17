import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions';
import Song from './song';
import ContentHeader from '../content/content-header';

function LikedSongs(props) {

    const { likes, songs } = props;
    
    useEffect(() => {
        likes.forEach(like => {
            props.fetchSong(like.song_id)
            // songIds.push(like.song_id)
        })
    }, [])

    if (Object.values(songs).length < likes.length) {
        return null
    } else {
        return (
            <div className="liked-songs">
                <ContentHeader content={{ name: 'Liked Songs' }} type={'liked'}/>
                { likes.map(like => {
                    let song = songs[like.song_id];
                    return <Song song={song} key={song.id} />
                }) }
            </div>
        )
    }

}

const mapState = state => ({
    likes: Object.values(state.entities.user.likes),
    songs: state.entities.songs
});

const mapDispatch = dispatch => ({
    fetchSong: songId => dispatch(fetchSong(songId)),
})

export default connect(mapState, mapDispatch)(LikedSongs);