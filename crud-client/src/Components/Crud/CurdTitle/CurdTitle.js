import React from 'react';
import PropTypes from 'prop-types';

import './CurdTitle.css';

function CurdTitle(props) {
    const { onUpdate: updateState} = props;

    return (
        <div className="crud-title">
            <h1 className='crud-h1'>
                Notes
            </h1>
            <div className="block-reload">
                <button className='reload-button' onClick={updateState}></button>
            </div>
        </div>
    )
}

CurdTitle.propTypes = {
    onUpdate: PropTypes.func.isRequired
};

export default CurdTitle;

