import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Theme from "utils/theme";
import TextArea from './TextArea';

describe('<TextArea />', () => {

  it('Should return one Label', () => {
    const wrapper = mount(<Theme><TextArea /></Theme>);
    expect(wrapper.find('label')).to.have.lengthOf(1);
  });
  it('Should return one TextArea', () => {
    const wrapper = mount(<Theme><TextArea /></Theme>);
    expect(wrapper.find('textarea')).to.have.lengthOf(1);
  });
  it('Should return the label with text descrição', () => {
    const wrapper = mount(<Theme><TextArea title='Descrição' /></Theme>);
    expect(wrapper.find('label').text()).to.equal('Descrição');
  });
  it('Should return the label with htmlFor descrição', () => {
    const wrapper = mount(<Theme><TextArea name='descricao' title='Descrição' /></Theme>);
    expect(wrapper.find('label').prop('htmlFor')).to.equal('descricao');
  });
  it('Should return the textarea with name descricao', () => {
    const wrapper = mount(<Theme><TextArea name='descricao' title='Descrição' /></Theme>);
    expect(wrapper.find('textarea').prop('name')).to.equal('descricao');
  });

});
