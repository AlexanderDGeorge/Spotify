import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import Logout from '../session/logout';

import './user.css'

function User(props) {

    const [open, setOpen] = useState(false);
    
    function dropdown() {
        return (
            <div className="user-dropdown">
                <Link to={"/user/" + props.user.id}>Account</Link>
                <Logout />
            </div>
        )
    }

    return (
        <div className="user" onClick={() => setOpen(!open)}>
            {props.user.username}
            <IoIosArrowDown />
            {open ? dropdown() : null}
        </div>
    )
}

const mapState = state => ({
    user: state.entities.user,
})

export default connect(mapState, undefined)(User);