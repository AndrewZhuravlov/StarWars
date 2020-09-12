import React, { Component } from 'react';
import s from './header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
                                    <Link className="nav-link link-color" to="/">People</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link link-color" to="/PlanetPage">Planets</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link link-color" to="/StarshipPage">Starships</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            
        )
    }
}