import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'boxicons';
import { ADDTASK } from 'utils/routes'

const HeaderTask = () => (
  <Container>
    <AddTask to={ADDTASK}><box-icon name='plus-circle' /> Adicionar tarefa</AddTask>
  </Container>
);

const Container = styled.section``;
const AddTask = styled(Link)`
  align-items: center;
  color: ${props => props.theme.colors.blue};
  cursor: pointer;
  display: flex;
  font-size: 1.5em;
  justify-content: center;
  padding: calc(${props => `${props.theme.spaces}px`} * 2) 0;
  text-decoration: none;
  width: 100%;

  box-icon {
    fill: ${props => props.theme.colors.blue};
    margin-right: ${props => props.theme.spaces}px;
    width: 20px;
  }

  @media screen and (min-width: ${props => props.theme.media.tablet}) {
    padding: ${props => props.theme.spaces}px calc(${props => `${props.theme.spaces}px`} * 2);
    max-width: 144px;
    width: auto;
  }
`;

export default HeaderTask;