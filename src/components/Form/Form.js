import React from 'react';
import styled from 'styled-components';
import { Input } from 'components/Input';
import { Select } from 'components/Select';
import { TextArea } from 'components/TextArea';
import { Button } from 'components/Button';

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

const Form = () => (
  <Element>
    <Input name='titulo' title='Title' />
    <ElementMultiply>
      <DateOfTheEvent>
        <Input name='data' title='Data do evento' />
      </DateOfTheEvent>
      <TimeOfTheEvent>
        <Input name='hora' title='Hora do evento' />
      </TimeOfTheEvent>
      <RememberMe>
        <Select name='lembre-me' title='Lembre-me' options={options} />
      </RememberMe>
    </ElementMultiply>
    <Tags>
      <Input name='tag' title='Tag' />
      <AddTag>Adicionar</AddTag>
    </Tags>
    <TextArea name='descricao' title='Descrição' />
    <Actions>
      <Add>Salvar</Add>
      <Cancel>Cancelar</Cancel>
    </Actions>
  </Element>
);

const Element = styled.div``;
const ElementMultiply = styled.div`
  margin-top: calc(${({ theme }) => theme.spaces}px * 2);
  margin-bottom: calc(${({ theme }) => theme.spaces}px * 2);
  display: flex;
  flex-wrap: wrap;
`;
const DateOfTheEvent = styled.div`
  margin-bottom calc(${({ theme }) => theme.spaces}px * 2);
  max-width: 100%;

  @media screen and (min-width: ${props => props.theme.media.tablet}) {
    max-width: 200px;
  }
`;
const TimeOfTheEvent = styled(DateOfTheEvent)`
  @media screen and (min-width: ${props => props.theme.media.tablet}) {
    margin-left: ${({ theme }) => theme.spaces}px;
  }
`;
const RememberMe = styled(DateOfTheEvent)`
  @media screen and (min-width: ${props => props.theme.media.tablet}) {
    margin-left: ${({ theme }) => theme.spaces}px;
  }
`;
const Actions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-top: calc(${({ theme }) => theme.spaces}px * 2);
`;
const Add = styled(Button)`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 1.4em;
  padding: ${({ theme }) => theme.spaces}px;
  width: auto;
`;
const Cancel = styled(Add)`
  background-color: ${({ theme }) => theme.colors.red};
  margin-left: ${({ theme }) => theme.spaces}px;
`;
const Tags = styled.div`
  align-items: flex-end;
  display: flex;
  margin-bottom: calc(${({ theme }) => theme.spaces}px * 3);  
`;
const AddTag = styled(Add)`
  height: 30px;
  padding: 0 ${({ theme }) => theme.spaces}px;
  margin-left: calc(${({ theme }) => theme.spaces}px * 2);
`;

export default Form;