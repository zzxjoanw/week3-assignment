import React, { Component } from 'react';

export default class ShoppingCart extends Component {
    render() {
        const flightList = this.props.flights
            .map( (flight, idx) => {
                return (
                    <li key={idx}>
                        {flight}
                        <button onClick={(idx) => this.props.onDeleteFlight(idx)}>Delete</button>
                    </li>
                );
            });
        
        return (
            <div>
                <h2>Shopping Cart</h2>
                <ul>
                    {flightList}
                </ul>
            </div>
        );
    }
}