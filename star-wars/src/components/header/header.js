import React, { Component } from 'react';
import s from './header.css';

export default class Header extends Component {

    render() {
        return (
            <div className="headerWrap">
                <div className="row roow">
                    <div className="col-md-3">
                        <h1>
                            <span>Star Wars</span>
                        </h1>
                    </div>
                    <div className="col-md-4">
                        <ul className="nav nav-pills nav-justified">
                            <li className="nav-item">
                                <a className="nav-link link-color" href="#">People</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-color" href="#">Planets</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-color" href="#">Starships</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}