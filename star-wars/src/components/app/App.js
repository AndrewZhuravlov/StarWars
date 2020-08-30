import React, { Component } from 'react';
import s from './App.css'
import Header from '../header/header';
import RandomPlanet from '../randomPlanet/randomPlanet';
import PersonPage from '../personPage/PersonPage';
import ItemList from '../itemList/randomList';
import PersonalDetails from '../personPage/personalDetailes/personalDetails';
import SwapiServices from '../swapiService/swapiService';
import Row from '../Row/Row';
import PlanetPage from '../planetPage/PlanetPage';
import StarshipPage from '../starshipPage/starshipPage';


export default class App extends Component {
    swapi = new SwapiServices();
    state = {
        selectedPersonId: 2,
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
                    <PersonPage
                        getData={this.swapi}
                        selectedPersonId={selectedPersonId}
                        onPersonClick={this.onPersonClick} />

                    <PlanetPage
                        getData={this.swapi}
                        selectedPersonId={selectedPersonId}
                        onPersonClick={this.onPersonClick}
                    />
                    <StarshipPage
                        getData={this.swapi}
                        selectedPersonId={selectedPersonId}
                        onPersonClick={this.onPersonClick} />
                </div>

            </div>
        )
    }
}



