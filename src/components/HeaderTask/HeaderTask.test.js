import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { TasksProvider } from 'contexts';
import Theme from "utils/theme";
import HeaderTask from './HeaderTask';

describe('Style component <HeaderTask />', () => {
  
  test('You should rennder the Link with the color #4e7cfd', () => {
    const wrapper = mount(<BrowserRouter><TasksProvider><Theme><HeaderTask /></Theme></TasksProvider></BrowserRouter>);
    expect(wrapper.find('Link')).toHaveStyleRule('color', '#4e7cfd');
  });
  test('You should rennder the Link with the padding calc(8px * 2) 0', () => {
    const wrapper = mount(<BrowserRouter><TasksProvider><Theme><HeaderTask /></Theme></TasksProvider></BrowserRouter>);
    expect(wrapper.find('Link')).toHaveStyleRule('padding', 'calc(8px * 2) 0');
  }); 
  test('Should return the padding with the value 8px calc(8px * 2) qhen the resolution is 768px', () => {
    const wrapper = mount(<BrowserRouter><TasksProvider><Theme><HeaderTask /></Theme></TasksProvider></BrowserRouter>);
    expect(wrapper.find('Link')).toHaveStyleRule('padding', '8px calc(8px * 2)', {
      media: `screen and (min-width: 768px)`
    })
  }); 

});
