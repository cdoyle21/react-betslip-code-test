import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Filter from './Filter';

configure({adapter: new Adapter()});

describe('<Filter />', () => {

    it('should be defined', () => {
        expect(Filter).toBeDefined();
      });
    it('should render Button component correctly', () => {
        shallow(<Filter />);
    });
});