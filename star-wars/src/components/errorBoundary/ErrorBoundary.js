import React, {Component} from 'react';
import OnError from '../onError/onError';

export default class ErrorBoundary extends Component{
    state = {
        hasError: false,
    }
    componentDidCatch(error, info){
        
        this.setState({ hasError: true })
    }

    render(){
        if(this.state.hasError){
            return <OnError/>
        }

        return(
            this.props.children
        )
    }
}