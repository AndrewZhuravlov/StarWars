import React, { Component } from 'react';
import ItemList from '../itemList/randomList';
import PersonalDetails from './personalDetailes/personalDetails';
import OnError from '../onError/onError';
export default class PersonPage extends Component {

    state = {
        hasError: false,
    }
    componentDidCatch(error, info){
        
        this.setState({ hasError: true })
    }

    render() {
        const {selectedPersonId, onPersonClick } = this.props;
        if(this.state.hasError){
            return <OnError/>
        }
        return (
            <React.Fragment>
                <div className="col-md-6">
                    <ItemList onPersonClick={onPersonClick} />
                </div>
                <div className="col-md-6">
                    <PersonalDetails
                        selectedPersonId={selectedPersonId} />
                </div>
            </React.Fragment>
        )
    }
}