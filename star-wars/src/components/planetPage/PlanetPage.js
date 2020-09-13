import React, { Component } from 'react';
import Row from '../Row/Row';
import PersonalDetails from '../personPage/personalDetailes/personalDetails';
import ItemList from '../itemList/randomList';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import withData from '../HOC-helpers/withData';
import withRenderItems from '../HOC-helpers/withRenderItems';

export default class PlanetPage extends Component {

    ListOfPlanet = withRenderItems( withData(ItemList, this.props.getData.getAllPlanets),
                             (item)=> (`${item.Name}`), this.props.onPersonalClick);   
    render() {
        const{getData, selectedPersonalId} =this.props;

        const details = (
            <PersonalDetails
                        getData={getData.getPlanet}
                        selectedPersonalId={selectedPersonalId}
                        getImage={getData.imagePlanetDownloader}
                    />
        )
        return (
            <ErrorBoundary>
                 <Row left={<this.ListOfPlanet/>} right={details} />
            </ErrorBoundary>
           
        )
    }
}