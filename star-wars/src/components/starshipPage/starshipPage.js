import React, { Component } from 'react';
import Row from '../Row/Row';
import ItemList from '../itemList/randomList';
import PersonalDetails from '../personPage/personalDetailes/personalDetails';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

export default class StarshipPage extends Component{

    render(){
        const{getData, selectedPersonId, onPersonClick} =this.props;
        const items = (
            <ItemList
                    renderItems = { (item)=> (`${item.Name}`)}
                    getData={getData.getAllStarships}
                    selectedPersonId={selectedPersonId}
                    onPersonClick={onPersonClick}
                />
        )

        const details = (
            <PersonalDetails
                        getData={getData.getStarship}
                        selectedPersonId={selectedPersonId}
                        getImage={getData.imageStarshipDownloader}
                    />
        )
        return (
            <ErrorBoundary>
                 <Row left={items} right={details} />
            </ErrorBoundary>
           
        )
    }
}