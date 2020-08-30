import React, { Component } from 'react';
import ItemList from '../itemList/randomList';
import PersonalDetails from './personalDetailes/personalDetails';
import OnError from '../onError/onError';
import Row from '../Row/Row';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';


export default class PersonPage extends Component {

    

    render() {
        const {selectedPersonId, onPersonClick, getData } = this.props;
        const itemList = (<ItemList
            renderItems = { (item)=> (`${item.Name} (${item.Gender})`)}
            getData = { getData.getAllPeople } 
            onPersonClick = { onPersonClick } />);

        const personalDetails = ( <PersonalDetails
            getData ={getData.getPerson}
            getImage = {getData.imagePersonDownloader}
            selectedPersonId={selectedPersonId} />);    
      
        return (
        <ErrorBoundary>
            <Row left={itemList} right={personalDetails}/>
        </ErrorBoundary>
        )
    }
}