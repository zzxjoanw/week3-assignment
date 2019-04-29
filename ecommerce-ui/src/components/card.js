import React, { Component } from 'react';

export default class Card extends Component {
    constructor(state) {
        super();
        this.toggleReserved = this.toggleReserved.bind(this);
        this.state = {
            isReserved:"Unreserved",
        }
    }

    toggleReserved() {
        if(this.state.isReserved === "Unreserved") {
            this.setState({isReserved:"Reserved"});
        }
        else {
            this.setState({isReserved:"Unreserved"});
        }
    }

    render() {
        return (
            <div className="card">
                <div className="title">{this.props.title}</div>
                <div className="location">{this.props.city}, {this.props.country}</div>
                <img src={this.props.image} alt="the property"></img>
                <div className="hostname">{this.props.hostname}{this.props.isSuperHost}</div>
                <div className="cost">${this.props.cost} {this.props.cancellation}</div>
                <div className="feedback" style={{backgroundImage: `linear-gradient(to right, #ffdd33 0%,#ffdd33 ${this.props.starCount+1.5}%,white ${this.props.starCount+1.5}%,white 100%)`}}>🟊🟊🟊🟊🟊</div>
                <div className="reviewCount">Reviews: {this.props.reviewCount}</div>
                <button className="status" onClick={this.toggleReserved}>{this.state.isReserved}</button>
            </div>
        );
    }
}

/*

4.5 -> 91.5%
*/