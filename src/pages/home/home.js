import React from 'react';
import styled from 'styled-components';
import { HeaderTask } from 'components/HeaderTask';
import { ListTask } from 'components/ListTask';
import tasks from 'fake-data/task';

const Home = () => (
  <Container>
    <HeaderTask />
    <Tasks>
      {tasks.map((items) => <ListTask item={items} />)}
    </Tasks>
  </Container>
);

const Container = styled.main`
  padding: 0 calc(${props => `${props.theme.spaces}px`} * 2);
  margin: calc(${props => `${props.theme.spaces}px`} * 2) auto 0;
  max-width: 1024px;
`;
const Tasks = styled.ul`
  background-color: ${({ theme }) => theme.colors.white};
  list-style: none;
  padding: calc(${({ theme }) => theme.spaces}px * 2);
  margin-top: calc(${({ theme }) => theme.spaces}px * 2);
`;

export default Home;