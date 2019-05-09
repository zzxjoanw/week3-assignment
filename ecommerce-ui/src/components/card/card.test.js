import React from 'react';
import Card from './card';

describe('Card', () => {
  it('renders without crashing', () => {
    expect(<Card />).toMatchSnapshot();
  });
})