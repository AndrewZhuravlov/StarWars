import React, { Component } from "react";
import { s } from "./personalDetails.css";
import SwapiServices from "../../swapiService/swapiService";
import Spinner from "../../spinner/spinner";
import ThrowErr from "../../throwErr/throwErr";
import OnError from "../../onError/onError";

export default class PersonalDetails extends Component {

    state = {
        item: null,
        onError: false,
        loading: true,
        imgUrl: null,
    }

    componentDidMount() {

        const { selectedPersonId, getData, getImage } = this.props;
        getData(selectedPersonId)
            .then(item => {

                this.setState({
                    item,
                    loading: false,
                    imgUrl: getImage(selectedPersonId)
                })
            })
            .catch(this.onErr);
    }

    onErr = () => {
        this.setState({
            onError: true,
        })
    }
    componentDidUpdate(prevProps) {
        if (this.props.selectedPersonId !== prevProps.selectedPersonId) {

            this.setState({
                loading: true,
            })
            this.componentDidMount();
        }
    }
    render() {
        const { item, onError, loading, imgUrl } = this.state;

        if (loading) {
            return <Spinner />
        }
        if (!item || onError) {
            return <OnError />
        }

        return (
            <PersonDescription imgUrl={imgUrl}
                item={item} />
        )
    }
}



class PersonDescription extends Component {

    render() {

        const itemsArray = Object.entries(this.props.item);
        const renderItems = itemsArray.map(([key, value], idx) => {
            if( key==='id' ) return;
            return(   
            <div key = {idx} className="randomDescriptionItem">
                <span>{key}: </span><span>{value}</span>
            </div>)
        });
        
        const { name } = this.props.item;

        return (
            <div>
                <div className="randomDescription d-flex" >
                    <div className="randomPhoto">
                        <a className='random_image' ><img src={this.props.imgUrl} alt="" /></a>
                    </div>
                    <div className="randomInfo">
                        <div className="randomName">
                            <span>{name}</span>
                        </div>
                        <div>
                            {renderItems}
                        </div>
                        <ThrowErr />
                    </div>
                </div>
            </div>
        )
    }
}