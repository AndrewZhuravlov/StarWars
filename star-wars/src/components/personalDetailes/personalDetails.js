import  React, { Component } from "react";
import { s } from "./personalDetails.css";
import SwapiServices from "../swapiService/swapiService";
import OnError from "../onError/onError";
import Spinner from "../spinner/spinner";

export default class PersonalDetails extends Component {
    
    state ={
        person: null,
        onError: false,
    }
    swapi = new SwapiServices();
    componentDidMount(){
        const {selectedPersonId} = this.props;
        if(!selectedPersonId){
            this.onErr();
        }
        this.swapi.getPerson(selectedPersonId)
        .then(person => {
            this.setState({
                person,
            })
        })
        .catch(this.onErr);
    }
   
    onErr = () => {
        this.setState({
            onError: true,
        })
    }
    render() {
        const {person, onError } =this.state;
        const err = onError ? <OnError/> : null;
        console.log(person);
        if(!person){
            return <Spinner/>
        }
        const { name, gender, birthYear, eyeColor, id} = person;
        return (
            <div>
                <div className="randomDescription d-flex" >
                    <div className="randomPhoto">
                        <a className='random_image' ><img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" /></a>
                    </div>
                    <div className="randomInfo">
                        <div className="randomName">
                            <span>{name}</span>
                        </div>
                        <div>
                            <div className="randomDescriptionItem">
                                <span>{gender}</span>
                            </div>
                            <div className="randomDescriptionItem">
                                <span>{birthYear}</span>
                            </div>
                            <div className="randomDescriptionItem">
                                <span>{eyeColor}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}