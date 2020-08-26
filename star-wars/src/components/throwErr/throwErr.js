import React, { Component } from 'react';

export default class TrowErr extends Component{
    state = {
        hasError: false, 
    }
    render(){
        if(this.state.hasError){
            this.foo.bar = 0;
        }
        return(
            <button
            onClick ={() => this.setState({hasError: true})} 
            className = 'btn btn-danger'>
                Throw Error
            </button>
        )
    }
}