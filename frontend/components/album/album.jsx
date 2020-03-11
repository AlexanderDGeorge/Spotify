import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ContentHeader from '../content/content-header';
import { fetchAlbum } from '../../actions/album_actions';
import { fetchSongs } from '../../actions/song_actions';
import Song from '../song/song';
import './album.css'

function Album(props) {

    const { albums, songs } = props;
    const album = albums[props.match.params.id];

    useEffect(() => {
        props.fetchSongs()
        props.fetchAlbum(props.match.params.id)
    }, [])

    if (album && !!Object.values(songs).length) {
        return (
            <div className="album">
                <ContentHeader type={'album'} content={album}/>
                <div>
                    { album.songIds.map(songId => {
                        return (
                            <Song song={songs[songId]} key={songId}/>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return null
    }
}

const mapState = state => ({
    albums: state.entities.albums,
    songs: state.entities.songs,
})

const mapDispatch = dispatch => ({
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
    fetchSongs: () => dispatch(fetchSongs()),
})

export default connect(mapState, mapDispatch)(Album);