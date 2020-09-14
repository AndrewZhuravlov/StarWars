import React, { Component } from 'react';
import ItemList from '../itemList/randomList';
import PersonalDetails from './personalDetailes/personalDetails';
import Row from '../Row/Row';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import withData from '../HOC-helpers/withData';
import withRenderItems from '../HOC-helpers/withRenderItems';



export default class PersonPage extends Component {

    ListOfPeople = withRenderItems(withData(ItemList, this.props.getData.getAllPeople),
        (item) => (`${item.Name} (${item.Gender})`), this.props.onPersonalClick);

    render() {
        const { selectedPersonalId, getData } = this.props;
        const{ ListOfPeople } = this;
        const personalDetails = (<PersonalDetails
            getData={getData.getPerson}
            getImage={getData.imagePersonDownloader}
            selectedPersonalId={selectedPersonalId} />);

        return (
            <ErrorBoundary>
                <Row left={<ListOfPeople />}
                    right={personalDetails} />
            </ErrorBoundary>
        )
    }
}
