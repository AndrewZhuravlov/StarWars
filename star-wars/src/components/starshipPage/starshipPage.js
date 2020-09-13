import React, { Component } from 'react';
import Row from '../Row/Row';
import ItemList from '../itemList/randomList';
import PersonalDetails from '../personPage/personalDetailes/personalDetails';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import withRenderItems from '../HOC-helpers/withRenderItems';
import withData from '../HOC-helpers/withData';

export default class StarshipPage extends Component{
    ListOfStarships = withRenderItems( withData(ItemList, this.props.getData.getAllStarships),
    (item)=> (`${item.Name}`), this.props.onPersonalClick);
    render(){
        const{getData, selectedPersonalId} =this.props;

        const details = (
            <PersonalDetails
                        getData={getData.getStarship}
                        selectedPersonalId={selectedPersonalId}
                        getImage={getData.imageStarshipDownloader}
                    />
        )
        return (
            <ErrorBoundary>
                 <Row left={<this.ListOfStarships/>} right={details} />
            </ErrorBoundary>
           
        )
    }
}