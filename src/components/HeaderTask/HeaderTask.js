import React from 'react';
import styled from 'styled-components';
import 'boxicons';
import { Button } from 'components/Button';

const HeaderTask = () => (
  <Container>
    <AddTask><box-icon name='plus-circle' /> Adicionar tarefa</AddTask>
  </Container>
);

const Container = styled.section``;
const AddTask = styled(Button)`
  align-items: center;
  background-color: transparent;
  color: ${props => props.theme.colors.blue};
  cursor: pointer;
  display: flex;
  font-size: 1.5em;
  justify-content: center;
  padding: calc(${props => `${props.theme.spaces}px`} * 2) 0;
  width: 100%;

  box-icon {
    fill: ${props => props.theme.colors.blue};
    margin-right: ${props => props.theme.spaces}px;
    width: 20px;
  }

  @media screen and (min-width: ${props => props.theme.media.tablet}) {
    padding: ${props => props.theme.spaces}px calc(${props => `${props.theme.spaces}px`} * 2);
    width: auto;
  }
`;

export default HeaderTask;