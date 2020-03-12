import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <HeaderContainer>
    <LogoName>To-Do List</LogoName>
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  display: flex;
  border-bottom: 1px solid #e8ecef;
  justify-content: center;
  padding: calc(${props => `${props.theme.spaces}px`} * 2) 0;
  width: 100%;
`;
const LogoName = styled.h1`
  color: ${props => props.theme.colors.blue};
  font-size: 1.8em;
  margin: 0;
`;

export default Header;