import React, {Component } from 'react';

export default class CardHolder extends Component {
    render() {
        const siteList = this.props.sites.map( (site,idx) => { 
            return (
                <li key={idx}>
                    <span>{site}</span>
                    <button onClick={this.props.clickHandler(idx)}>Book</button>
                </li>
            );
        });
        return (
            <div>
                <ul>
                    {siteList}
                </ul>
            </div>
        );
    }
}