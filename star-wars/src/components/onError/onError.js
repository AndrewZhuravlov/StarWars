import React, { Component } from 'react';
import s from './onError.css';

export default class OnError extends Component{

    render(){

        return(
            <div className='col-md-12 wrapper'>
                <h2 className='boom' >Booom!</h2>
                <span>We already send R2-D2 to fix this bug))))</span>
            </div>
        )
    }
}