import React, { Component } from 'react';
import s from './App.css'
import Header from '../header/header';
import RandomPlanet from '../randomPlanet/randomPlanet';
import PersonPage from '../personPage/PersonPage';

<<<<<<< HEAD

export default class App extends Component {
    state = {
        selectedPersonId: 1,
    }
    onPersonClick = (id) => {
=======
export default class App extends Component {
    state = {
        selectedPersonId: 1,
    }
    onPersonClick = (id)=>{

>>>>>>> 88501453bbbc757203b2c1822e58cb04a4e49ccd
        this.setState({
            selectedPersonId: id,
        })
    }
    render() {
<<<<<<< HEAD
        const { selectedPersonId } = this.state;
=======
        const {selectedPersonId}=this.state;
>>>>>>> 88501453bbbc757203b2c1822e58cb04a4e49ccd
        return (
            <div className="container">
                <Header />
                <RandomPlanet />
                <div className="randomListWrapper">
                    <div className="row">
<<<<<<< HEAD
                        <PersonPage 
                        selectedPersonId = {selectedPersonId}
                        onPersonClick = {this.onPersonClick} />
=======
                        <div className="col-md-6">
                            <ItemList onPersonClick ={this.onPersonClick} />
                        </div>
                        <div className="col-md-6">
                            <PersonalDetails selectedPersonId ={selectedPersonId}  />
                        </div>
>>>>>>> 88501453bbbc757203b2c1822e58cb04a4e49ccd
                    </div>
                </div>

            </div>
        )
    }
}



