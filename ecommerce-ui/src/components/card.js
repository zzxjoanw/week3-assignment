import React, { Component } from 'react';
export default class Card extends Component {
    render() {
        const bnbList = this.props.BNBs.map( (bnb, idx) => {
            return (
                <div className="card">
                    <div className="title">{this.props.title}</div>
                    <div className="location">{this.props.city}, {this.props.country}</div>
                    <img src={this.props.image} alt="the property"></img>
                    <div className="hostname">{this.props.hostname}{this.props.isSuperHost}</div>
                    <div className="cost">${this.props.cost} {this.props.cancellation}</div>
                    <div className="feedback" style={{backgroundImage: `linear-gradient(to right, #ffdd33 0%,#ffdd33 ${this.props.starCount+1.5}%,white ${this.props.starCount+1.5}%,white 100%)`}}>🟊🟊🟊🟊🟊</div>
                    <div className="reviewCount">Reviews: {this.props.reviewCount}</div>
                    <button className="status" onClick={(idx) => this.props.toggleReserve(idx)}>Reserve</button>
                </div>
            );
        });

        return ({bnbList});
    }
}