import React, { Component } from 'react';
import s from './App.css'
import Header from '../header/header';
import RandomPlanet from '../randomPlanet/randomPlanet';
import PersonPage from '../personPage/PersonPage';


export default class App extends Component {
    state = {
        selectedPersonId: 1,
    }
    onPersonClick = (id) => {
        this.setState({
            selectedPersonId: id,
        })
    }
    render() {
        const { selectedPersonId } = this.state;
        return (
            <div className="container">
                <Header />
                <RandomPlanet />
                <div className="randomListWrapper">
                    <div className="row">
                        <PersonPage 
                        selectedPersonId = {selectedPersonId}
                        onPersonClick = {this.onPersonClick} />
                    </div>
                </div>

            </div>
        )
    }
}



