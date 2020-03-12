import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <HeaderContainer>
    <LogoName>To-Do List</LogoName>
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.white};
  border-bottom: 1px solid #e8ecef;
  display: flex;
  justify-content: center;
  padding: calc(${props => `${props.theme.spaces}px`} * 2) 0;
  width: 100%;
`;
const LogoName = styled.h1`
  color: ${props => props.theme.colors.black};
  font-size: 1.8em;
  margin: 0;
`;

export default Header;