import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';
import './cover.css';

function Cover(props) {

    const { albums } = props;
    const { songArray } = props.queue;

    useEffect(() => {
        fetchAlbums();
    }, [])

    function fetchCover() {
        let albumId = songArray[0].album_id;
        let cover = albums[albumId].img_url;
        return cover;
    }
    
    if (songArray.length) {
        return (
            <div className='cover'>
                <img src={fetchCover()} />
            </div>
        )
    } else {
        return (
            <div className='cover'></div>
        )
    }
}

const mapState = state => ({
    queue: state.entities.queue,
    albums: state.entities.albums,
})

const mapDispatch = dispatch => ({
    fetchAlbums: () => dispatch(fetchAlbums()),
})

export default connect(mapState, null)(Cover);