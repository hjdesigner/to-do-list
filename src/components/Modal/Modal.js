import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Button } from 'components/Button';

const Modal = ({ title, open, handleClose, children }) => {
  
  return (
    <Fragment>
      <Container visibility={open.toString()}>
        <CloseModal aria-label="Fechar Modal" onClick={handleClose}><box-icon name='plus' /></CloseModal>
        <Title>{title}</Title>
        <Content>
          {children}
        </Content>
      </Container>
      <Overlay visibility={open.toString()} onClick={handleClose} />
    </Fragment>
  )
}

const Overlay = styled.div`
  background-color: rgba(255, 255, 255, .8);
  height: 100%;
  left: 0;
  opacity: ${props => (props.visibility === 'true' ? '1' : '0')};
  position: fixed;
  transition: all .25s ease-in-out;
  top: 0;
  visibility: ${props => (props.visibility === 'true' ? 'visible' : 'hidden')};
  width: 100%;
  z-index: 1;
`;
const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  box-sizing: border-box;
  display: ${props => (props.visibility === 'true' ? 'flex' : 'none')};
  flex-direction: column;
  left: 0;
  opacity: ${props => (props.visibility === 'true' ? '1' : '0')};
  padding: calc(${props => `${props.theme.spaces}px`} * 2);
  position: absolute;
  height: 100%;
  transition: all .35s ease-in-out;
  top: 0;
  visibility: ${props => (props.visibility === 'true' ? 'visible' : 'hidden')};
  width: 100%;
  z-index: 2;

  @media screen and (min-width: ${props => props.theme.media.tablet}) {
    left: calc(50% - 350px);
    height: 500px;
    top: calc(50% - 250px);
    width: 700px;
  }
`;
const Title = styled.h3`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 1.8em;
  font-weight: normal;
  text-align: center;
  margin: ${({ theme }) => theme.spaces}px 0 calc(${props => `${props.theme.spaces}px`} * 3);
`;
const CloseModal  = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  padding: 0;
  position: absolute;
  right: ${({ theme }) => theme.spaces}px;
  transform: rotate(45deg);
  top: ${({ theme }) => theme.spaces}px;
  width: 24px;
`;
const Content = styled.div`
  flex: 1;
  overflow-x: auto;
`;

export default Modal;