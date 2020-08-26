/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import s from './randomPlanet.css';
import SwapiServices from './../swapiService/swapiService'
import Spinner from '../spinner/spinner';
import OnError from '../onError/onError';

export default class RandomPlanet extends Component {
    
    
    state = {
        planet:{},
        loading: true,
        error: false, 
    }

    componentDidMount(){
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet,10000);
       
    }
    
    swapi = new SwapiServices();
    
    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false });
    }

    onError = (err) =>{
        console.error(err);
        this.setState({
            error: true,
            loading: false,
        })
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    updatePlanet = () => {
            const randomID = Math.floor(Math.random() * 20 + 1);
            this.swapi.getPlanet(randomID)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    
    render() {

        const { planet, loading, error } = this.state;
        const spinner = loading ?  <Spinner/> : null;
        const terra = (!loading && !error) ? <Planet planet = {planet}/> : null;
        const onError = error ? <OnError /> : null;
        return (

            <div className='planetWrapper'>
                <div className="row">
                
                    { spinner }
                    { terra }
                    {onError}
                </div>
            </div>
        )
    }
}

const Planet = ({ planet }) =>{
const { name, population, rotationPeriod, diameter, id } = planet;
    return (
        <React.Fragment>
                    <div className="col-md-3">
                        <a className='planet_image' href='#'><img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet-picture" /></a>
                    </div>
                    <div className="col-md-4">
                        <div className="planetInfo">
                            <div className="planetName">
                                <span>{name}</span>
                            </div>
                            <div className="planetDescription">
                                <div className="planetDescriptionItem">
                                    <span>Population: </span><span>{population}</span>
                                </div>
                                <div className="planetDescriptionItem">
                                    <span>Rotation period: </span><span>{rotationPeriod}</span>
                                </div>
                                <div className="planetDescriptionItem">
                                    <span>Diameter: </span><span>{diameter}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
        </React.Fragment>
    )
}