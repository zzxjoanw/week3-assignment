import React, { Component } from 'react';

export default class FlightList extends Component {
    render() {
        const flightList = this.props.flights.map( (flight,idx) => { 
            return (
                <li key={idx}>
                    <span>{flight}</span>
                    <button onClick={this.props.onBookFlight(idx)}>Book</button>
                </li>
            );
        });
        return (
            <div>
                <ul>
                    {flightList}
                </ul>
            </div>
        );
    }
}