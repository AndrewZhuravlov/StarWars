import React, { Component } from 'react';
import s from './randomList.css';

export default class RandomList extends Component {

    render() {
        return (

            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action ">Random Item</a>
                <a href="#" className="list-group-item list-group-item-action ">Random Item</a>
                <a href="#" className="list-group-item list-group-item-action ">Random Item</a>
            </div>
            
        )
    }
}