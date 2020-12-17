import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OrderSummary from './OrderSummary';

configure({adapter: new Adapter()});

describe('<OrderSummary />', () => {

    it('should be defined', () => {
        expect(OrderSummary).toBeDefined();
      });
    it('should render Button component correctly', () => {
        shallow(<OrderSummary />);
    });
});