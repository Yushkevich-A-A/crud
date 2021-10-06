import React from 'react';
import PropTypes from 'prop-types';
import CrudItem from './CrudItem/CrudItem';

import './CurdList.css';

function CurdList(props) {
    const { list, onDelete: handleDelete } = props;

    return (
        <div className="notes-list">
            {
                list.map( item => <CrudItem key={item.id} item={item} onDelete={handleDelete}/>)
            }
        </div>
    )
}

CurdList.propTypes = {
    list: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default CurdList;

