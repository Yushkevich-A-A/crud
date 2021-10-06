import React from 'react';
import PropTypes from 'prop-types';

import './CrudItem.css';

function CrudItem(props) {
    const { item, onDelete: handleDelete } = props;
    return (
        <div className="notes-item">
            <p>{item.text}</p>
            <div className="note-item-delete">
                <button className='item-delete-button' onClick={() => handleDelete(item.id)}></button>
            </div>
        </div>
    )
}

CrudItem.propTypes = {
    item: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default CrudItem;

