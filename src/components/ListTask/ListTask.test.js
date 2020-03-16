import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { BrowserRouter } from 'react-router-dom';
import { TasksProvider } from 'contexts';
import Theme from "utils/theme";
import ListTask from './ListTask';

describe('<ListTask />', () => {
  let wrapper, data;

  beforeEach(() => {
    data = {
      id: 1,
      title: 'Aqui vai o nome da task',
      date: '10/12/2020',
      create: '13/03/2020',
      time: '20:00',
      reminder: '5',
      tags: [
        {
          id: 1,
          name: 'vai que cola',
        }
      ],
      description: 'Aqui vai a descrição'
    }
    wrapper = mount(
      <BrowserRouter>
        <Theme>
          <TasksProvider>
            <ListTask item={data} />
          </TasksProvider>
        </Theme>
      </BrowserRouter>);
  });

  it('Should return one li', () => {
    expect(wrapper.find('li')).to.have.lengthOf(1);
  });
  
  it('Should return one button', () => {
    expect(wrapper.find('button')).to.have.lengthOf(1);
  });

  it('Should return one link', () => {
    expect(wrapper.find('Link')).to.have.lengthOf(1);
  });

  it('Should return one input', () => {
    expect(wrapper.find('input')).to.have.lengthOf(1);
  });

  it('Should return one label', () => {
    expect(wrapper.find('label')).to.have.lengthOf(1);
  });

  it('Should the component contain a title equal to the las one by data', () => {
    expect(wrapper.find('h2').text()).to.equal('Aqui vai o nome da task');
  });

  it('Should the component contain a date equal to the las one by data', () => {
    expect(wrapper.find('p').text()).to.equal(' 10/12/2020');
  });

});
