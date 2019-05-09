import CardHolder from "./cardHolder";
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import React from 'react';

describe('CardHolder test', () => {
    it('renders without crashing', () => {
        expect(<CardHolder />).toMatchSnapshot();
    });
    
    const sites = ['Denver', 'Budapest', 'Tokyo'];
    it('matches even if received contains additional elements', () => {
      expect(['Denver', 'Budapest', 'Tokyo']).toEqual(expect.arrayContaining(sites));
    });

    it('does not match if received does not contain expected elements', () => {
      expect(['Denver', 'Budapest']).not.toEqual(expect.arrayContaining(sites));
    });
  });