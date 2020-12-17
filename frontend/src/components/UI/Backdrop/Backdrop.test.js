import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Backdrop from './Backdrop';

configure({adapter: new Adapter()});

describe('<Backdrop />', () => {

    it('should be defined', () => {
        expect(Backdrop).toBeDefined();
      });
    it('should render Button component correctly', () => {
        shallow(<Backdrop />);
    });
});