import React, { Component } from 'react';
import s from './App.css'
import Header from '../header/header';
import RandomPlanet from '../randomPlanet/randomPlanet';
import PersonPage from '../personPage/PersonPage';
import SwapiServices from '../swapiService/swapiService';
import PlanetPage from '../planetPage/PlanetPage';
import StarshipPage from '../starshipPage/starshipPage';


export default class App extends Component {
    swapi = new SwapiServices();
    state = {
        selectedPersonId: 1,
        selectedPlanetId: 1,
        selectedStarshipId: 2,
    }


    onPersonClick = (id) => {
        this.setState({
            selectedPersonId: id,
        })
    };

    onPlanetClick = (id) => {
        this.setState({
            selectedPlanetId: id,
        })
    };

    onStarshipClick = (id) => {
        this.setState({
            selectedStarshipId: id,
        })
    };

    render() {

        const { selectedPersonId, selectedPlanetId,
            selectedStarshipId } = this.state;
        return (
            <div className="container">
                <Header />
                <RandomPlanet />
                <div className="randomListWrapper">
                    <PersonPage
                        getData={this.swapi}
                        selectedPersonalId={selectedPersonId}
                        onPersonalClick={this.onPersonClick} />

                    <PlanetPage
                        getData={this.swapi}
                        selectedPersonalId={selectedPlanetId}
                        onPersonalClick={this.onPlanetClick}
                    />
                    <StarshipPage
                        getData={this.swapi}
                        selectedPersonalId={selectedStarshipId}
                        onPersonalClick={this.onStarshipClick} />
                </div>

            </div>
        )
    }
}



