import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from './Modal';
import Backdrop from '../Backdrop/Backdrop';

configure({adapter: new Adapter()});

describe('<Modal />', () => {

    it('should be defined', () => {
        expect(Modal).toBeDefined();
      });
    it('should render Button component correctly', () => {
        shallow(<Modal />);
    });
    it('should render <Backdrop />', () => {
        const wrapper = shallow(<Modal />);
        expect(wrapper.find(Backdrop)).toHaveLength(1);
    });
});