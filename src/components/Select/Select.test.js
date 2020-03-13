import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Theme from "utils/theme";
import Select from './Select';

describe('<TextArea />', () => {
  const options = [
    {
      id: 0,
      value: 5,
      name: '5 minutos',
    },
    {
      id: 1,
      value: 10,
      name: '10 minutos',
    },
    {
      id: 2,
      value: 30,
      name: '30 minutos',
    },
  ];

  it('Should return one Label', () => {
    const wrapper = mount(<Theme><Select name='RememberMe' title='RememberMe' options={options} /></Theme>);
    expect(wrapper.find('label')).to.have.lengthOf(1);
  });
  it('Should return one select', () => {
    const wrapper = mount(<Theme><Select name='RememberMe' title='RememberMe' options={options} /></Theme>);
    expect(wrapper.find('select')).to.have.lengthOf(1);
  });
  it('Should return the label with text RememberMe', () => {
    const wrapper = mount(<Theme><Select name='RememberMe' title='RememberMe' options={options} /></Theme>);
    expect(wrapper.find('label').text()).to.equal('RememberMe');
  });
  it('Should return the label with htmlFor RememberMe', () => {
    const wrapper = mount(<Theme><Select name='RememberMe' title='RememberMe' options={options} /></Theme>);
    expect(wrapper.find('label').prop('htmlFor')).to.equal('RememberMe');
  });
  it('Should return the select with name RememberMe', () => {
    const wrapper = mount(<Theme><Select name='RememberMe' title='RememberMe' options={options} /></Theme>);
    expect(wrapper.find('select').prop('name')).to.equal('RememberMe');
  });
  it('Should return one select', () => {
    const wrapper = mount(<Theme><Select name='RememberMe' title='RememberMe' options={options} /></Theme>);
    expect(wrapper.find('option')).to.have.lengthOf(3);
  });

});
