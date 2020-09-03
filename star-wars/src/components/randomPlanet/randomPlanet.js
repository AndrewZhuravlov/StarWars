
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
        imgUrl: null, 
    }

    componentDidMount(){
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet,10000);
       
    }
    
    swapi = new SwapiServices();
    
    onPlanetLoaded = (planet) => {
        this.setState({ 
            planet, 
            loading: false,
             });
    };

    onError = (err) =>{
        console.error(err);
        this.setState({
            error: true,
            loading: false,
        })
    };

    componentWillUnmount(){
        clearInterval(this.interval);
    };

    updatePlanet = () => {
            const randomID = Math.floor(Math.random() * 19 + 1 );
            this.swapi.getPlanet(randomID)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
            this.updateImage(randomID);
    };

    updateImage =(id) => {
        this.setState({
            imgUrl: this.swapi.imagePlanetDownloader(id),
        })
    }
    
    render() {

        const { planet, loading, error, imgUrl } = this.state;
        const spinner = loading ?  <Spinner/> : null;
        const terra = (!loading && !error) ? <Planet imgUrl = { imgUrl } planet = {planet}/> : null;
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

const Planet = ( props ) => {
const { Name, Population, RotationPeriod, Diameter, id } = props.planet;
const { imgUrl } = props;
    return (
        <React.Fragment>
                    <div className="col-md-4">
                        <a className='planet_image' href='#'><img src={ imgUrl }  alt="planet-picture" /></a>
                    </div>
                    <div className="col-md-3">
                        <div className="planetInfo">
                            <div className="planetName">
                                <span>{Name}</span>
                            </div>
                            <div className="planetDescription">
                                <div className="planetDescriptionItem">
                                    <span>Population: </span><span>{Population}</span>
                                </div>
                                <div className="planetDescriptionItem">
                                    <span>Rotation period: </span><span>{RotationPeriod}</span>
                                </div>
                                <div className="planetDescriptionItem">
                                    <span>Diameter: </span><span>{Diameter}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">

                    </div>
        </React.Fragment>
    )
}