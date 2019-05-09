import React, {Component } from 'react';
import CardHolder from './components/cardHolder/cardHolder';
import Cart from './components/cart/cart';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  state = {
    sites: [],
    reservedSites: [],
    resCount: 0,
  }

  toggleReserve = (idx, title) => {
    return () => {
      const reservation = title;
//      const reservation = this.state.sites[idx];

      if(this.state.reservedSites.includes(reservation)) {
        alert("You already booked that one.");
        return;
      }

      this.setState(prevState => {
        console.log(this.state.reservedSites.length);
        return {
          reservedSites: [...prevState.reservedSites, reservation],
          resCount: this.state.reservedSites.length+1 //why do I need to add one?
        };
      })
    }
  }

  delete = (idx) => {
    const res = this.state.reservedSites;
    res.splice(idx,1);
    this.setState({reservedSites:res, resCount: this.state.reservedSites.length});
  } 

  render() {
    return (
      <div className="App"> 
        <Cart sites={this.state.reservedSites} clickHandler={this.delete} count={this.state.resCount} />
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