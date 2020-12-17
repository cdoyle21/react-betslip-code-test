import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BuildControl from './BuildControl';

configure({adapter: new Adapter()});

describe('<BuildControl />', () => {

    it('should be defined', () => {
        expect(BuildControl).toBeDefined();
      });
    it('should render Button component correctly', () => {
        shallow(<BuildControl />);
    });
    it('should have betValue ID', () => {
        const wrapper = shallow(<BuildControl />);
        expect(wrapper.find('#betValue')).toHaveLength(1);
    });
});