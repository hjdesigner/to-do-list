import React from 'react';
import Enzyme, { mount } from 'enzyme';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Theme from "utils/theme";
import Header from './Header';

describe('Style component <Header />', () => {
  
  test('You should rennder the header with the background-color #FFFFFF', () => {
    const wrapper = mount(<Theme><Header /></Theme>);
    expect(wrapper.find('header')).toHaveStyleRule('background-color', '#FFFFFF');
  });
  test('You should rennder the header with the padding calc(8px * 2) 0', () => {
    const wrapper = mount(<Theme><Header /></Theme>);
    expect(wrapper.find('header')).toHaveStyleRule('padding', 'calc(8px * 2) 0');
  });
  test('You should rennder the h1 with the color #242530', () => {
    const wrapper = mount(<Theme><Header /></Theme>);
    expect(wrapper.find('h1')).toHaveStyleRule('color', '#242530');
  });

});
