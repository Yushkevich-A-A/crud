import React from 'react';
import PropTypes from 'prop-types';
import './Crud.css';

function Crud() {

    return (
        <div className="crud">
            <div className="crud-title">
                <h1 className='crud-h1'>
                    Notes
                </h1>
                <div className="block-reload">
                    <button className='reload-button'></button>
                </div>
            </div>
            <div className="notes-list">
                <div className="notes-item">
                    <p>Какой-то там текст</p>
                    <div className="note-item-delete">
                        <button classNam='item-delete-button'></button>
                    </div>
                </div>
                <div className="notes-item">
                    <p>Какой-то там текст</p>
                    <div className="note-item-delete">
                        <button classNam='item-delete-button'></button>
                    </div>
                </div>
            </div>
            <form className="block-send-text">
                <div className="block-input-send-text">
                    <input type="text" />
                </div>
                <button className='button-send-text'></button>
            </form>
        </div>
    )
}

Crud.propTypes = {

};

export default Crud;

