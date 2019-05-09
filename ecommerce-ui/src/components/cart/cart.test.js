import Cart from "./cart";
import React, { Component } from 'react';

it('renders without crashing', () => {
    expect(<Cart />).toMatchSnapshot();
  });