import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart.js';
import './App.css';
import FlightList from './FlightList.js';

class App extends Component {
  state = { //remember, state flows down to child components
    flights: [
      'Seattle -> Tokyo',
      'Seattle -> Budapest',
    ],
    selectedFlights: []
  }

  bookFlight = (idx) => {
    return () => {
      const selectedFlight = this.state.flights[idx];

      if(this.state.selectedFlights.includes(selectedFlight)) {
        alert("You already selected that flight.");
        return;
      }

      this.setState(prevState => {
        return {
          selectedFlights: [...prevState.selectedFlights, selectedFlight]
        };
      })
      console.log(selectedFlight);
    }
  }

  deleteFlight = (idx) => {
    this.setState(prevState => {
      const selectedFlights = [...prevState.selectedFlights];
      selectedFlights.splice(idx,1);

      return {
        selectedFlights
      }
    });
  }

  render() {
    return (
      <div className="App">
        <ShoppingCart onDeleteFlight={this.deleteFlight} flights={this.state.selectedFlights}/>
        <hr/>
        <FlightList onBookFlight={this.bookFlight} flights={this.state.flights}/>
      </div>
    );
  }
}

export default App;
//1:02:38