import React from 'react';
import styled from 'styled-components';
import { HeaderTask } from 'components/HeaderTask';

const Home = () => (
  <Container>
    <HeaderTask />
  </Container>
);

const Container = styled.main`
  padding: 0 calc(${props => `${props.theme.spaces}px`} * 2);
  margin: calc(${props => `${props.theme.spaces}px`} * 2) auto 0;
  max-width: 1024px;
`;

export default Home;