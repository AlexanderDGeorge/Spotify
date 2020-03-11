import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ContentHeader from '../content/content-header';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchSongs } from '../../actions/song_actions';
import Song from '../song/song';
import './artist.css'

function Artist(props) {

    const { artists, songs } = props;
    const artist = artists[props.match.params.id];

    useEffect(() => {
        props.fetchSongs()
        props.fetchArtist(props.match.params.id)
    }, [])

    if (artist && !!Object.values(songs).length) {
        return (
            <div className="artist">
                <ContentHeader type={'artist'} content={artist}/>
                <div>
                    { artist.songIds.map(songId => {
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
    artists: state.entities.artists,
    songs: state.entities.songs,
})

const mapDispatch = dispatch => ({
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
    fetchSongs: () => dispatch(fetchSongs()),
})

export default connect(mapState, mapDispatch)(Artist);