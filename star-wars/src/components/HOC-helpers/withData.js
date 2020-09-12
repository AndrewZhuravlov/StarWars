import React, { Component } from 'react';
import Spinner from '../spinner/spinner';
import OnError from '../onError/onError';

const withData = (WrappedComponent, getData) => {

    return class extends Component {
        state = {
            itemList: null,
            onError: false,
        }
        componentDidMount() {

                getData()
                .then(itemList => {
                    this.setState({
                        itemList,
                    })
                })
                .catch(this.onError)

        };

        onError = () => {
            this.setState({
                onError: true,
            })
        };

        render() {
            const { itemList, onError } = this.state;
            if (!itemList) {
                return <Spinner />
            };

            if(onError){
                return <OnError/>
            };

            return (
                <WrappedComponent 
                data = {this.state}
                    {...this.props} />
            )
        }
    }
};

export default withData;