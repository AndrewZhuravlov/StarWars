import React, { Component } from 'react';
import s from './App.css'
import Header from '../header/header';
import RandomPlanet from '../randomPlanet/randomPlanet';
import ItemList from '../itemList/randomList';
import PersonalDetails from '../personalDetailes/personalDetails';

export default class App extends Component {

    render() {
        return (

            <div className="container">
                <Header />
                <RandomPlanet />
                <div className="randomListWrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <ItemList />
                        </div>
                        <div className="col-md-6">
                            <PersonalDetails />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}