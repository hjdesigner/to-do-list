import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/Button';

const ListTask = ({ item }) => (
  <List key={item.id}>
    <ListContentInfo>
      <ListCheck>
        <ListCheckbox id={`check-${item.id}`} name='check' type='checkbox' />
        <ListLabel aria-label="Finalizar tarefa" htmlFor={`check-${item.id}`} /> 
      </ListCheck>
      <ListTitle>{item.title}</ListTitle>
    </ListContentInfo>
    <ListActions>
      <ListDate><box-icon name='calendar'></box-icon> {item.date}</ListDate>
      <ListEdit>Editar</ListEdit>
      <ListDelete>Deletar</ListDelete>
    </ListActions>
  </List>
);

const List = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => theme.spaces}px;

  @media screen and (min-width: ${props => props.theme.media.tablet}) {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;
const ListContentInfo = styled.div`
  align-items: center;
  display: flex;
`;
const ListActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.spaces}px;

  @media screen and (min-width: ${props => props.theme.media.tablet}) {
    margin-top: 0;
  }
`;
const ListCheck = styled.div`
  margin-right: ${({ theme }) => theme.spaces}px;
`;
const ListLabel = styled.label`
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  height: 24px;
  position: relative;
  width: 24px;

  &:before {
    background-color: ${({ theme }) => theme.colors.purple};
    border-radius: 3px;
    content: "";
    display: none;
    height: 24px;
    width: 24px;
  }
  &:after {
    border: 3px solid ${({ theme }) => theme.colors.white};
    border-top: 0;
    border-right: 0;
    content: "";
    display: none;
    height: 6px;
    left: 4px;
    position: absolute;
    top: 6px;   
    transform: rotate(-45deg); 
    width: 14px;    
  }
`;
const ListCheckbox = styled.input`
  display: none;

  &:checked + ${ListLabel}:before,
  &:checked + ${ListLabel}:after {
    display: block;
  }
`;
const ListTitle = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.3em;
  font-weight: normal;
  margin: 0;
`;
const ListDate = styled.p`
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  font-size: 1.3em;
  font-weight: bold;
  margin: 0 ${({ theme }) => theme.spaces}px 0 0;

  box-icon {
    fill: ${({ theme }) => theme.colors.black};
    margin-right: ${({ theme }) => theme.spaces}px;
    width: 20px;
  }
`;
const ListEdit = styled(Button)`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  padding: ${({ theme }) => theme.spaces}px;
  width: auto;
`;
const ListDelete = styled(ListEdit)`
  background-color: ${({ theme }) => theme.colors.red};
  margin-left: ${({ theme }) => theme.spaces}px;
`;

export default ListTask;