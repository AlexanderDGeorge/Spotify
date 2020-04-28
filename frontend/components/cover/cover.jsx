import React from 'react';
import { connect } from 'react-redux';

function Cover(props) {
    const { songArray } = props.queue;
    console.log(songArray);
    return (
        <div className='cover'>

        </div>
    )
}

const mapState = state => ({
    queue: state.entities.queue,
})

export default connect(mapState, null)(Cover);