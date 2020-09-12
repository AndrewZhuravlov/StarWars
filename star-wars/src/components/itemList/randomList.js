import React, { Component } from 'react';
import s from './randomList.css';


class RandomList extends Component {


    peopleRender(arr) {
        return arr.map((item) => {
            const { renderItems } = this.props;
            const { id } = item;
            const label = renderItems(item);
            return (
                <li key={id}
                    onClick={() => this.props.onPersonalClick(id)}
                    className="list-group-item list-group-item-action ">
                    <span>{label}</span></li>
            )
        })
    }


    render() {
        const {itemList} = this.props.data;
        const people = this.peopleRender(itemList);
        return (
            <div className="list-group">
                {people}
            </div>

        )
    }
};

export default RandomList;