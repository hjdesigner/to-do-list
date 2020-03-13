import React from 'react';
import styled from 'styled-components';
import { Form } from 'components/Form';

const AddTask = () => (
  <Container>
    <Title>Adicionar Tarefa</Title>

    <FormElement>
      <Form />
    </FormElement>
  </Container>
);

const Container = styled.main`
  padding: 0 calc(${props => `${props.theme.spaces}px`} * 2);
  margin: calc(${props => `${props.theme.spaces}px`} * 2) auto 0;
  max-width: 1024px;
`;
const FormElement = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  list-style: none;
  padding: calc(${({ theme }) => theme.spaces}px * 2);
  margin-top: calc(${({ theme }) => theme.spaces}px * 2);
`;
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 1.8em;
  margin: calc(${props => `${props.theme.spaces}px`} * 3) 0;
`;

export default AddTask;