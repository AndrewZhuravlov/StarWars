import React, { Component } from 'react';
import s from './randomPlanet.css';
import SwapiServices from './../swapiService/swapiService'
export default class RandomPlanet extends Component {

    
    state = {
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null,
    }
    randomID = Math.floor(Math.random() * 25 + 1);
    swapi = new SwapiServices();
    
    updateState() {

        this.swapi.getPlanet(this.randomID)
            .then(data => {
                this.setState(() => {
                    return {
                        name: data.name,
                        population: data.population,
                        rotationPeriod: data.rotation_period,
                        diameter: data.diameter,
                    }
                })
            });
    }
    render() {

        const { name, population, rotationPeriod, diameter } = this.state;
        this.updateState();
        return (

            <div className='planetWrapper'>
                <div className="row">
                    <div className="col-md-3">
                        <a className='planet_image' href="https://placeholder.com/"><img src="https://via.placeholder.com/200" alt="" /></a>
                    </div>
                    <div className="col-md-4">
                        <div className="planetInfo">
                            <div className="planetName">
                                <span>{name}</span>
                            </div>
                            <div className="planetDescription">
                                <div className="planetDescriptionItem">
                                    <span>Population:</span><span>{population}</span>
                                </div>
                                <div className="planetDescriptionItem">
                                    <span>Rotation period:</span><span>{rotationPeriod}</span>
                                </div>
                                <div className="planetDescriptionItem">
                                    <span>Diameter:</span><span>{diameter}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        )
    }
}