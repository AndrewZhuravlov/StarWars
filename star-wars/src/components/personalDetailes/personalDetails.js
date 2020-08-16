import  React, { Component } from "react";
import { s } from "./personalDetails.css";

export default class PersonalDetails extends Component {

    render() {

        return (
            <div>
                <div className="randomDescription d-flex" >
                    <div className="randomPhoto">
                        <a className='random_image' href="https://placeholder.com/"><img src="https://via.placeholder.com/150" alt="" /></a>
                    </div>
                    <div className="randomInfo">
                        <div className="randomName">
                            <span>random Name</span>
                        </div>
                        <div>
                            <div className="randomDescriptionItem">
                                <span>Population</span>
                            </div>
                            <div className="randomDescriptionItem">
                                <span>Rotation period 23</span>
                            </div>
                            <div className="randomDescriptionItem">
                                <span>Diameter 7200</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}