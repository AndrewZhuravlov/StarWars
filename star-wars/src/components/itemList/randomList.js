import React, { Component } from 'react';
import s from './randomList.css';
import SwapiServices from '../swapiService/swapiService';
import Spinner from '../spinner/spinner';
import OnError from '../onError/onError';

export default class RandomList extends Component {
    state = {
        itemList: null,
        onError: false,
    }
    componentDidMount(){

        this.props.getData()
        .then(itemList => {
            this.setState({
                itemList,
            })
        })
        .catch(this.onError)
    }

    peopleRender (arr) {
        return arr.map((item) => {
          const {renderItems} = this.props;
          const {id} = item;
          const label = renderItems(item);  
          return (
            <li key = {id}
                onClick = {()=>this.props.onPersonClick(id)}
                className="list-group-item list-group-item-action ">
                {label}</li>
          )
         })
      }

    onError = ()=>{
        this.setState({
            onError: true,
        })
    }
    render() {
        
        const {itemList, onError}= this.state;
        if(!itemList){
            return <Spinner/>
        }
        const people = this.peopleRender(itemList);
        const err = onError ? <OnError/>: null; 
        return (   
            <div className="list-group">
                {people}
                {err}
            </div>
            
        )
    }
}