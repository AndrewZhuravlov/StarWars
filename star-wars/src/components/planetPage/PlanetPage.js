import React, { Component } from 'react';
import Row from '../Row/Row';
import PersonalDetails from '../personPage/personalDetailes/personalDetails';
import ItemList from '../itemList/randomList';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
export default class PlanetPage extends Component {

    render() {
        const{getData, selectedPersonalId, onPersonalClick} =this.props;
        const items = (
            <ItemList
                    renderItems = { (item)=> (`${item.Name}`)}
                    getData={getData.getAllPlanets}
                    selectedPersonalId={selectedPersonalId}
                    onPersonalClick={onPersonalClick}
                />
        )

        const details = (
            <PersonalDetails
                        getData={getData.getPlanet}
                        selectedPersonalId={selectedPersonalId}
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