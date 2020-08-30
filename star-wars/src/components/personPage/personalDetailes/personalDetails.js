import  React, { Component } from "react";
import { s } from "./personalDetails.css";
import SwapiServices from "../../swapiService/swapiService";
import Spinner from "../../spinner/spinner";
import ThrowErr from "../../throwErr/throwErr";
import OnError from "../../onError/onError";

export default class PersonalDetails extends Component {
    
    state ={
        item: null,
        onError: false,
        loading : true,
        imgUrl: null,
    }
    
    componentDidMount(){
        
        const {selectedPersonId, getData, getImage} = this.props;
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
    componentDidUpdate(prevProps){
        if(this.props.selectedPersonId !== prevProps.selectedPersonId){

            this.setState({
                loading: true,
            })
            this.componentDidMount();
        }
    }
    render() {
        const {item, onError, loading, imgUrl } =this.state;

        if(loading){
            return <Spinner/>
        }
        if(!item || onError ){
            return <OnError/>
        }
       
        return (
            <PersonDescription imgUrl ={imgUrl}
                               item ={item}/>
        )
    }
}



class PersonDescription extends Component{

    render(){
       
        console.log(this.props.item);
        const { name, gender, birthYear, eyeColor} = this.props.item;
        
        return(
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
                            <div className="randomDescriptionItem">
                                <span>{gender}</span>
                            </div>
                            <div className="randomDescriptionItem">
                                <span>{birthYear}</span>
                            </div>
                            <div className="randomDescriptionItem">
                                <span>{eyeColor}</span>
                            </div>
                        </div>
                       <ThrowErr/>
                    </div>
                </div>
            </div>
        )
    }
}