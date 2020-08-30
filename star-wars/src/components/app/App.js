import React, { Component } from 'react';
import s from './App.css'
import Header from '../header/header';
import RandomPlanet from '../randomPlanet/randomPlanet';
import PersonPage from '../personPage/PersonPage';
import ItemList from '../itemList/randomList';
import PersonalDetails from '../personPage/personalDetailes/personalDetails';
import SwapiServices from '../swapiService/swapiService';
import Row from '../Row/Row';


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
                    <Row
                        left = {<PersonalDetails
                            getData = {this.swapi.getPerson}
                            selectedPersonId={10}
                            getImage = {this.swapi.imagePersonDownloader}
                           
                            />}
                        right={
                            <PersonalDetails
                                    getData = {this.swapi.getPlanet}
                                    selectedPersonId={4}
                                    getImage = {this.swapi.imagePlanetDownloader}
                                    />
                        }    />
                   {/*  <div className="row">
                        <PersonPage
                            getData ={this.swapi}
                            selectedPersonId={selectedPersonId}
                            onPersonClick={this.onPersonClick} />
                    </div> */}
                    {/* <div className="row">
                        <React.Fragment>
                            <div className="col-md-6">
                                <ItemList
                                renderItems ={ (item) => (`${item.name} (${item.diameter})`)}
                                getData = { this.swapi.getAllPlanets }
                                onPersonClick={this.onPersonClick} />
                            </div>
                            <div className="col-md-6">
                                <PersonalDetails
                                    getData = {this.swapi.getPlanet}
                                    selectedPersonId={selectedPersonId}
                                    getImage = {this.swapi.imagePlanetDownloader}
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
                                    getData = {this.swapi.getStarship}
                                    selectedPersonId={selectedPersonId}
                                    getImage = {this.swapi.imageStarshipDownloader} />
                            </div>
                        </React.Fragment>
                    </div> */}
                </div>

            </div>
        )
    }
}



