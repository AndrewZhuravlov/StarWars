import React, { Component } from 'react';
import Row from '../Row/Row';
import ItemList from '../itemList/randomList';
import PersonalDetails from '../personPage/personalDetailes/personalDetails';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

export default class StarshipPage extends Component{

    render(){
        const{getData, selectedPersonalId, onPersonalClick} =this.props;
        const items = (
            <ItemList
                    renderItems = { (item)=> (`${item.Name}`)}
                    getData={getData.getAllStarships}
                    onPersonalClick={onPersonalClick}
                />
        )

        const details = (
            <PersonalDetails
                        getData={getData.getStarship}
                        selectedPersonalId={selectedPersonalId}
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