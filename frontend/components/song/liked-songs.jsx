import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import Song from './song';
import ContentHeader from '../content/content-header';

function LikedSongs(props) {

    const likes = (props.likes);
    const songIds = [];
    likes.forEach(like => {
        songIds.push(like.song_id - 1)
    })

    useEffect(() => {
        props.fetchSongs();
    }, [])

    if (props.songs.length === 0) return null;
    else return (
        <div className="liked-songs">
            <ContentHeader content={{ name: 'Liked Songs' }} type={'liked'}/>
            { songIds.map(id => {
                if (!props.songs[id]) debugger;
                let song = props.songs[id];
                return <Song song={song} key={song.id} />
            }) }
        </div>
    )
}

const mapState = state => ({
    likes: Object.values(state.entities.user.likes),
    songs: Object.values(state.entities.songs)
});

const mapDispatch = dispatch => ({
    fetchSongs: () => dispatch(fetchSongs()),
})

export default connect(mapState, mapDispatch)(LikedSongs);