import React, {Component } from 'react';
import airbnbs from './../airbnbs';

export default class CardHolder extends Component {
    render() {
        const siteList = Object.keys(airbnbs).map( (item, idx) => (
            <li key={idx} className="card">
                <div>{airbnbs[idx].title}</div>
                <span>{airbnbs[idx].houseType}</span>
                <img src={airbnbs[idx].image} />
                <span className="feedback">: {airbnbs[idx].rating.stars}</span><span className="star">★</span>
                <button onClick={this.props.clickHandler(idx, airbnbs[idx].title)}>Book</button>
            </li>
        ))
        return (
            <div>
                <ul id="cardHolder">
                    {siteList}
                </ul>
            </div>
        );
    }
}
