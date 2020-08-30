import React, { Component } from 'react';
import Row from '../Row/Row';
import PersonalDetails from '../personPage/personalDetailes/personalDetails';
import ItemList from '../itemList/randomList';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
export default class PlanetPage extends Component {

    render() {
        const{getData, selectedPersonId, onPersonClick} =this.props;
        const items = (
            <ItemList
                    renderItems = { (item)=> (`${item.Name}`)}
                    getData={getData.getAllPlanets}
                    selectedPersonId={selectedPersonId}
                    onPersonClick={onPersonClick}
                />
        )

        const details = (
            <PersonalDetails
                        getData={getData.getPlanet}
                        selectedPersonId={selectedPersonId}
                        getImage={getData.imagePlanetDownloader}
                    />
        )
        return (
            <ErrorBoundary>
                 <Row left={items} right={details} />
            </ErrorBoundary>
           
        )
    }
}