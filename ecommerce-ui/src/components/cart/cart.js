import React, { Component } from 'react';

export default class Cart extends Component {
    render() {
        const siteList = this.props.sites
            .map( (site, idx) => {
                return (
                    <li key={idx}>
                        <button onClick={this.props.clickHandler}>Delete</button>
                        {site}
                    </li>
                )
            })

        return (
            <div id="cart">
                <div id="cartTop">
                    <span>Hello.</span>
                    <span className="reservation">{this.props.count}</span>
                </div>
                <ul>
                    {siteList}
                </ul>
            </div>
        );
    }
}  