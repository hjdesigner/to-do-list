import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Button from './Button';

describe('<Button />', () => {

  it('Should return one button', () => {
    const wrapper = mount(<Button />);
    expect(wrapper.find('button')).to.have.lengthOf(1);
  });

  it('Should return the button  with the text to add task', () => {
    const wrapper = mount(<Button>Add Task</Button>);
    expect(wrapper.find('button').text()).to.equal('Add Task');
  });

  it('Simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<Button onClick={onButtonClick}>Add Task</Button>);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });

});
