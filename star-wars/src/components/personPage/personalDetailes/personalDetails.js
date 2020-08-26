import  React, { Component } from "react";
import { s } from "./personalDetails.css";
import SwapiServices from "../../swapiService/swapiService";
import Spinner from "../../spinner/spinner";
import ThrowErr from "../../throwErr/throwErr";
import OnError from "../../onError/onError";

export default class PersonalDetails extends Component {
    
    state ={
        person: null,
        onError: false,
        loading : true,
    }
    swapi = new SwapiServices();
    componentDidMount(){
        
        const {selectedPersonId} = this.props;
        this.swapi.getPerson(selectedPersonId)
        .then(person => {
            this.setState({
                person,
                loading: false
            })
        })
        .catch(this.onErr);
    }
   
    onErr = () => {
        this.setState({
            onError: true,
        })
    }
    componentDidUpdate(prevProps){
        if(this.props.selectedPersonId !== prevProps.selectedPersonId){

            this.setState({
                loading: true,
            })
            this.componentDidMount();
        }
    }
    render() {
        const {person, onError, loading } =this.state;

        if(loading){
            return <Spinner/>
        }
        if(!person || onError ){
            return <OnError/>
        }
       
        return (
            <PersonDescription person ={person}/>
        )
    }
}



class PersonDescription extends Component{

    render(){
        const { name, gender, birthYear, eyeColor, id} = this.props.person;
        return(
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
                       <ThrowErr/>
                    </div>
                </div>
            </div>
        )
    }
}