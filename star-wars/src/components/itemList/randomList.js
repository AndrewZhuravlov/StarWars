import React, { Component } from 'react';
import s from './randomList.css';
import SwapiServices from '../swapiService/swapiService';
import Spinner from '../spinner/spinner';
import OnError from '../onError/onError';

export default class RandomList extends Component {
    state = {
        personList: null,
        onError: false,
    }
    swapi = new SwapiServices();
    componentDidMount(){

        this.swapi.getAllPeople()
        .then(personList => {
            this.setState({
                personList,
            })
        })
        .catch(this.onError)
    }

    peopleRender  (arr) {
        return arr.map(({ name, id, }) => {
          return (
            <li key = {id}
                onClick = {()=>this.props.onPersonClick(id)}
                className="list-group-item list-group-item-action ">
                {name}</li>
          )
         })
      }

    onError = ()=>{
        this.setState({
            onError: true,
        })
    }
    render() {
        
        const {personList, onError}= this.state;
        if(!personList){
            return <Spinner/>
        }
        const people = this.peopleRender(personList);
        const err = onError ? <OnError/>: null; 
        return (   
            <div className="list-group">
                {people}
                {err}
            </div>
            
        )
    }
}