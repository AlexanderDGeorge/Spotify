import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import './errors.css';

function Errors(props) {

    const [open, setOpen] = useState(true);
    const { error } = props;

    useEffect(() => {
        if (!error) {
            setOpen(false)
            props.setOpen(false);
        }
    })

    if (open) {
        return (
            <div className="errors">
                <div className="errors-modal">
                    <button className="modal-exit" onClick={() => setOpen(false)}>
                        <MdClose />
                    </button>
                    {error}
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default Errors;