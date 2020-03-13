import React from 'react';
import Enzyme, { mount } from 'enzyme';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Theme from "utils/theme";
import HeaderTask from './HeaderTask';

describe('Style component <HeaderTask />', () => {
  
  test('You should rennder the button with the color #4e7cfd', () => {
    const wrapper = mount(<Theme><HeaderTask /></Theme>);
    expect(wrapper.find('Button')).toHaveStyleRule('color', '#4e7cfd');
  });
  test('You should rennder the button with the padding calc(8px * 2) 0', () => {
    const wrapper = mount(<Theme><HeaderTask /></Theme>);
    expect(wrapper.find('Button')).toHaveStyleRule('padding', 'calc(8px * 2) 0');
  }); 
  test('Should return the padding with the value 8px calc(8px * 2) qhen the resolution is 768px', () => {
    const wrapper = mount(<Theme><HeaderTask /></Theme>);
    expect(wrapper.find('Button')).toHaveStyleRule('padding', '8px calc(8px * 2)', {
      media: `screen and (min-width: 768px)`
    })
  }); 

});
