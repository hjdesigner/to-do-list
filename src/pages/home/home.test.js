import React from 'react';
import Enzyme, { mount } from 'enzyme';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { BrowserRouter } from 'react-router-dom';
import { TasksProvider } from 'contexts'
import Theme from "utils/theme";
import Home from './home';

describe('Style component <Home />', () => {
  
  test('You should rennder the container with the padding 0 calc(8px * 2)', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Theme>
          <TasksProvider>
            <Home />
          </TasksProvider>
        </Theme>
      </BrowserRouter>
    );
    expect(wrapper.find('main')).toHaveStyleRule('padding', '0 calc(8px * 2)');
  });
  test('You should rennder the container with the margin calc(8px * 2) auto 0', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Theme>
          <TasksProvider>
            <Home />
          </TasksProvider>
        </Theme>
      </BrowserRouter>
    );
    expect(wrapper.find('main')).toHaveStyleRule('margin', 'calc(8px * 2) auto 0');
  });
  test('You should rennder the Tasks with the background-color #FFFFFF', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Theme>
          <TasksProvider>
            <Home />
          </TasksProvider>
        </Theme>
      </BrowserRouter>
    );
    expect(wrapper.find('ul')).toHaveStyleRule('background-color', '#FFFFFF');
  });
  test('You should rennder the Tasks with the padding calc(8px * 2)', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Theme>
          <TasksProvider>
            <Home />
          </TasksProvider>
        </Theme>
      </BrowserRouter>
    );
    expect(wrapper.find('ul')).toHaveStyleRule('padding', 'calc(8px * 2)');
  });
  test('You should rennder the Tasks with the margin-top calc(8px * 2)', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Theme>
          <TasksProvider>
            <Home />
          </TasksProvider>
        </Theme>
      </BrowserRouter>
    );
    expect(wrapper.find('ul')).toHaveStyleRule('margin-top', 'calc(8px * 2)');
  });
  test('You should rennder the PaginationTasks with the margin calc(8px * 2) 0', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Theme>
          <TasksProvider>
            <Home />
          </TasksProvider>
        </Theme>
      </BrowserRouter>
    );
    expect(wrapper.find('div')).toHaveStyleRule('margin', 'calc(8px * 2) 0');
  });
  test('You should rennder the PaginationButton with the border 1px solid #e8ecef', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Theme>
          <TasksProvider>
            <Home />
          </TasksProvider>
        </Theme>
      </BrowserRouter>
    );
    expect(wrapper.find('button')).toHaveStyleRule('border', '1px solid #e8ecef');
  });
  test('You should rennder the PaginationButton with the padding calc(8px * 2) 0', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Theme>
          <TasksProvider>
            <Home />
          </TasksProvider>
        </Theme>
      </BrowserRouter>
    );
    expect(wrapper.find('button')).toHaveStyleRule('padding', 'calc(8px * 2) 0');
  });

});
