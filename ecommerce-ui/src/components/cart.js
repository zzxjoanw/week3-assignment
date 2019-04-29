import React, { Component } from 'react';

export default class Cart extends Component {
    constructor(state) {
        super();
        this.resCount = 0;
    }

    render() {
        return (
            <div id="cart">
                <span>Hello.</span>
                <span className="reservation">{this.props.resCount}</span>
            </div>
        );
    }
}