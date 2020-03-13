import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Theme from "utils/theme";
import Input from './Input';

describe('<Input />', () => {

  it('Should return one Label', () => {
    const wrapper = mount(<Theme><Input /></Theme>);
    expect(wrapper.find('label')).to.have.lengthOf(1);
  });
  it('Should return one Input', () => {
    const wrapper = mount(<Theme><Input /></Theme>);
    expect(wrapper.find('input')).to.have.lengthOf(1);
  });
  it('Should return the label with text title', () => {
    const wrapper = mount(<Theme><Input title='Title' /></Theme>);
    expect(wrapper.find('label').text()).to.equal('Title');
  });
  it('Should return the label with htmlFor title', () => {
    const wrapper = mount(<Theme><Input name='title' title='Title' /></Theme>);
    expect(wrapper.find('label').prop('htmlFor')).to.equal('title');
  });
  it('Should return the input with name title', () => {
    const wrapper = mount(<Theme><Input name='title' title='Title' /></Theme>);
    expect(wrapper.find('input').prop('name')).to.equal('title');
  });

});
