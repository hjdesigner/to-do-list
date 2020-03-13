import React from 'react';
import Enzyme, { mount } from 'enzyme';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Theme from "utils/theme";
import Home from './home';

describe('Style component <Home />', () => {
  
  test('You should rennder the container with the padding 0 calc(8px * 2)', () => {
    const wrapper = mount(<Theme><Home /></Theme>);
    expect(wrapper.find('main')).toHaveStyleRule('padding', '0 calc(8px * 2)');
  });
  test('You should rennder the container with the margin calc(8px * 2) auto 0', () => {
    const wrapper = mount(<Theme><Home /></Theme>);
    expect(wrapper.find('main')).toHaveStyleRule('margin', 'calc(8px * 2) auto 0');
  });

});
