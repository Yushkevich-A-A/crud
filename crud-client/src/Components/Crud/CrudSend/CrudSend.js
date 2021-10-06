import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CrudSend.css';

function CrudSend(props) {
    const { onSend } = props;
    
    const [ value, setValue ] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value.trim() === '') {
            return;
        }
        onSend(value);
        setValue('');
    }

    return (
        <form className="block-send-text" onSubmit={handleSubmit}>
            <div className="block-text">
                <textarea className="block-input-text" type="text" onChange={handleChange} value={value}></textarea>
            </div>
            <button className='button-send-text'></button>
        </form>
    )
}

CrudSend.propTypes = {
    onSend: PropTypes.func.isRequired
};

export default CrudSend;

