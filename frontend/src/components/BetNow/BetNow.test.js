import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BetNow from './BetNow';

configure({adapter: new Adapter()});

describe('<BetNow />', () => {

    it('should be defined', () => {
        expect(BetNow).toBeDefined();
      });
    it('should render Button component correctly', () => {
        shallow(<BetNow />);
    });
    it('should have orderButton class', () => {
        const wrapper = shallow(<BetNow />);
        expect(wrapper.find('button').hasClass('orderButton')).toBeTruthy();
    });
});