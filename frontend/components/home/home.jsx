import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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
                <div>
                    <div className='recommended'>
                        <h2>Recommended</h2>
                        {albums.map(album => {
                            console.log(album)
                            return <img src={album.img_url} className="album-cover"/>
                        })}
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