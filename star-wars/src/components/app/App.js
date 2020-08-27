import React, { Component } from 'react';
import s from './App.css'
import Header from '../header/header';
import RandomPlanet from '../randomPlanet/randomPlanet';
import PersonPage from '../personPage/PersonPage';
import ItemList from '../itemList/randomList';
import PersonalDetails from '../personPage/personalDetailes/personalDetails';
import SwapiServices from '../swapiService/swapiService';


export default class App extends Component {
    swapi = new SwapiServices();
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
                            getData ={this.swapi.getAllPeople}
                            selectedPersonId={selectedPersonId}
                            onPersonClick={this.onPersonClick} />
                    </div>
                    <div className="row">
                        <React.Fragment>
                            <div className="col-md-6">
                                <ItemList
                                renderItems ={ (item) => (`${item.name} (${item.diameter})`)}
                                getData = { this.swapi.getAllPlanets }
                                onPersonClick={this.onPersonClick} />
                            </div>
                            <div className="col-md-6">
                                <PersonalDetails
                                    selectedPersonId={selectedPersonId}
                                    />
                            </div>
                        </React.Fragment>
                    </div>
                    <div className="row">
                        <React.Fragment>
                            <div className="col-md-6">
                                <ItemList
                                renderItems ={ (item) => (`${item.name} (${item.model})`)}
                                getData = { this.swapi.getAllStarships }
                                onPersonClick={this.onPersonClick} />
                            </div>
                            <div className="col-md-6">
                                <PersonalDetails
                                    selectedPersonId={selectedPersonId} />
                            </div>
                        </React.Fragment>
                    </div>
                </div>

            </div>
        )
    }
}



