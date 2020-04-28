import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbums } from '../../actions/album_actions';
import User from '../user/user';
import './home.css';

function Home(props) {

    const { albums } = props;

    useEffect(() => {
        props.fetchAlbums();
    }, [])

    if (albums.length) {
        return(
            <div className="home">
                <User />
                <div className='recommended'>
                    <h2>Recommended</h2>
                    <div className='recommended-cards'>
                        {albums.map(album => (
                            <div className='album-card' key={album.id}>
                                <img src={album.img_url} />
                                <Link to={`albums/${album.id}`}>{album.name}</Link>
                                <Link to={`artists/${album.artistId}`}>{album.artist}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

const mapState = state => ({
    albums: Object.values(state.entities.albums),
})

const mapDispatch = dispatch => ({
    fetchAlbums: () => dispatch(fetchAlbums()),
})

export default connect(mapState, mapDispatch)(Home);