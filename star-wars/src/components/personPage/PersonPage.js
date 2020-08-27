import React, { Component } from 'react';
import ItemList from '../itemList/randomList';
import PersonalDetails from './personalDetailes/personalDetails';
import OnError from '../onError/onError';
import Row from '../Row/Row';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';


export default class PersonPage extends Component {

    

    render() {
        const {selectedPersonId, onPersonClick } = this.props;
        const itemList = (<ItemList
            renderItems = { (item)=> (`${item.name} (${item.gender})`)}
            getData = { this.props.getData } 
            onPersonClick = { onPersonClick } />);

        const personalDetails = ( <PersonalDetails
            selectedPersonId={selectedPersonId} />);    
      
        return (
        <ErrorBoundary>
            <Row left={itemList} right={personalDetails}/>
        </ErrorBoundary>
        )
    }
}