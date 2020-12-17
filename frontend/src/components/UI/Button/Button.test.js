import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import Button from './Button';

configure({ adapter: new Adapter() });

describe('Render Button component', () => {
    const mockFn = jest.fn();
    it('should be defined', () => {
        expect(Button).toBeDefined();
      });
    it('should render Button component correctly', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.find('button').hasClass('button')).toBeTruthy();   
        expect(wrapper).toMatchSnapshot();
    });
    it('should have a click function', () => {
        const wrapper = shallow(
          <button onClick={mockFn} />
        );
        wrapper.simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });
  });
