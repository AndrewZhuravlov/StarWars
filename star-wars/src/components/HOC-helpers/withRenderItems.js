import React, { Component } from 'react';

const  withRenderItems = (WrappedComp, func, listener) => {

    return class extends Component{
        render(){

            return ( <WrappedComp
            renderItems ={ func }
            onPersonalClick = { listener }/>
            );
        }
    }
};

export default withRenderItems;