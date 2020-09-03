import React, { Component } from 'react';
import ItemList from '../itemList/randomList';
import PersonalDetails from './personalDetailes/personalDetails';
import OnError from '../onError/onError';
import Row from '../Row/Row';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';


export default class PersonPage extends Component {

    

    render() {
        const {selectedPersonalId, onPersonalClick, getData } = this.props;
        const itemList = (<ItemList
            renderItems = { (item)=> (`${item.Name} (${item.Gender})`)}
            getData = { getData.getAllPeople } 
            onPersonalClick = { onPersonalClick } />);

        const personalDetails = ( <PersonalDetails
            getData ={getData.getPerson}
            getImage = {getData.imagePersonDownloader}
            selectedPersonalId={selectedPersonalId} />);    
      
        return (
        <ErrorBoundary>
            <Row left={itemList} right={personalDetails}/>
        </ErrorBoundary>
        )
    }
}