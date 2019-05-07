import React, {Component } from 'react';
import CardHolder from './components/cardHolder';
import Cart from './components/cart';
import './App.css';

class App extends Component {
  state = {
    sites: ['Denver','Budapest','Tokyo'],
    reservedSites: [],
  }

  toggleReserve = (idx) => {
    return () => {
      const reservation = this.state.sites[idx];

      if(this.state.reservedSites.includes(reservation)) {
        alert("You already booked that one.");
        return;
      }

      this.setState(prevState => {
        return {
          reservedSites: [...prevState.reservedSites, reservation]
        };
      })
    }
  }

  delete = (idx) => {
    const res = this.state.reservedSites;
    res.splice(idx,1);
    this.setState({reservedSites:res});
  } 

  render() {
    return (
      <div className="App"> 
        <Cart sites={this.state.reservedSites} clickHandler={this.delete} />
        <hr />
        <CardHolder sites={this.state.sites} clickHandler={this.toggleReserve} />
      </div>
    );
  }
}

App.propTypes = {
  sites: PropTypes.array,
  clickHandler: PropTypes.func,
}

export default App;