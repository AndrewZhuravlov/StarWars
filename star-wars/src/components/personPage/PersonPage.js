import React, { Component } from 'react';
import ItemList from '../itemList/randomList';
import PersonalDetails from './personalDetailes/personalDetails';
import OnError from '../onError/onError';
import Row from '../Row/Row';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import withData from '../HOC-helpers/withData';


export default class PersonPage extends Component {
    
    ListOfPeople = withRenderItems( withData(ItemList, this.props.getData.getAllPeople),
                             (item)=> (`${item.Name} (${item.Gender})`), this.props.onPersonalClick);   
                            

    render() {
        const {selectedPersonalId, getData} = this.props;
        const personalDetails = ( <PersonalDetails
            getData ={getData.getPerson}
            getImage = {getData.imagePersonDownloader}
            selectedPersonalId={selectedPersonalId} />);    
      
        return (
        <ErrorBoundary>
            <Row left={<this.ListOfPeople/>} 
             right={personalDetails}/>
        </ErrorBoundary>
        )
    }
}

const withRenderItems = (WrappedComp, func, id) => {

    return class extends Component{
        render(){

            return ( <WrappedComp
            renderItems ={ func }
            onPersonalClick = { id }/>
            );
        }
    }
} 