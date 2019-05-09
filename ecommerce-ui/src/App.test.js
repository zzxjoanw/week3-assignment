import React from 'react';
import renderer from 'react-test-renderer';
import CardHolder from './components/cardHolder/cardHolder';
import Cart from './components/cart/cart';

it('renders an empty cart', () => {
  const sites = [];
  const emptyCart = renderer.create(<Cart sites={sites} />).toJSON();
  expect(emptyCart).toMatchSnapshot();
});

it('renders a cart with items in it', () => {
  const sites = ['Denver'];
  const cart = renderer.create(<Cart sites={sites} />).toJSON();
  expect(cart).toMatchSnapshot();
});