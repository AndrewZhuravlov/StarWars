import React, { Component } from 'react';
import ItemList from '../itemList/randomList';
import PersonalDetails from './personalDetailes/personalDetails';
import OnError from '../onError/onError';
import Row from '../Row/Row';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import withData from '../HOC-helpers/withData';


export default class PersonPage extends Component {

    

    render() {
        const {selectedPersonalId, onPersonalClick, getData} = this.props;
       /*  const itemList = (<ItemList
            renderItems = { (item)=> (`${item.Name} (${item.Gender})`)}
            getData = { getAllPeople } 
            onPersonalClick = { onPersonalClick } />); */
        const ListOfPeople = withRenderItems( withData(ItemList, getData.getAllPeople),
                             (item)=> (`${item.Name} (${item.Gender})`), onPersonalClick);   
                            
        const personalDetails = ( <PersonalDetails
            getData ={getData.getPerson}
            getImage = {getData.imagePersonDownloader}
            selectedPersonalId={selectedPersonalId} />);    
      
        return (
        <ErrorBoundary>
            <Row left={<ListOfPeople/>} 
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