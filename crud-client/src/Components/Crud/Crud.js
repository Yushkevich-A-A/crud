import React from 'react';
import CurdList from './CurdList/CurdList';
import CrudSend from './CrudSend/CrudSend';
import CurdTitle from './CurdTitle/CurdTitle';

import './Crud.css';

class Crud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

        this.updateState = this.updateState.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.updateState();
    }

    updateState = () => {
        fetch(`${process.env.REACT_APP_CURRENCY_URL}/notes`)
        .then( response => response.json())
        .then( result => this.setState({
            data: result,
        }))
    }

    handleDelete = async (id) => {
        await fetch(`${process.env.REACT_APP_CURRENCY_URL}/notes/${id}`, {
            method: 'DELETE',
        })
        this.updateState();
    }

    handleSubmit = async (text) => {
        await fetch(`${process.env.REACT_APP_CURRENCY_URL}/notes`, {
            method: 'POST',
            body: text,
        });

        this.updateState(); 
    }

    render() {
        return (
            <div className="crud">
                <CurdTitle onUpdate={this.updateState} />
                <CurdList list={this.state.data} onDelete={this.handleDelete} />
                <CrudSend onSend={this.handleSubmit} />
            </div>
        )
    }
}

export default Crud;