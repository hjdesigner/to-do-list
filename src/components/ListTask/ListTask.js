import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { EDITTASK } from 'utils/routes'
import { Button } from 'components/Button';
import { useTasks, useModalTask } from 'hooks';

const ListTask = ({ item }) => {
  const { addTasks } = useTasks();
  const { toggleModal } = useModalTask();

  function requestTask() {
    return axios.get('http://5e6b9daed708a000160b4bbc.mockapi.io/api/v1/task')
      .then((response) => {
        addTasks(response.data);
      })
      .catch((error) => {
        toast.error('Houve um erro, atualize a pagina');
      });
  }

  const handleDelete = (id) => {
    axios.delete(`http://5e6b9daed708a000160b4bbc.mockapi.io/api/v1/task/${id}`)
      .then((response) => {
        toast.success('Tarefa deletada com sucesso');
        requestTask();
      })
      .catch((error) => {
        toast.error('Houve um erro, atualize a pagina');
      });
  }

  const handleCheck = (id, status) => {
    axios.put(`http://5e6b9daed708a000160b4bbc.mockapi.io/api/v1/task/${id}`, {
      finished: !status
    })
      .then((response) => {
        toast.success('Alteração realizada com sucesso');
        requestTask();
      })
      .catch((error) => {
        toast.error('Houve um erro, atualize a pagina');
      });
  }

  const openTask = () => {
    toggleModal();
  }

  return (
    <List key={item.id}>
      <ListContentInfo>
        <ListCheck>
          <ListCheckbox
            id={`check-${item.id}`}
            name='check'
            type='checkbox'
            checked={item.finished}
            onChange={() => handleCheck(item.id, item.finished)}
          />
          <ListLabel aria-label="Finalizar tarefa" htmlFor={`check-${item.id}`} /> 
        </ListCheck>
        <ListTitle onClick={() => openTask()}>{item.title}</ListTitle>
      </ListContentInfo>
      <ListActions>
        <ListDate><box-icon name='calendar'></box-icon> {item.date}</ListDate>
        <ListEdit to={{
          pathname: EDITTASK,
          state: {
            id: item.id,
          }
        }}>Editar</ListEdit>
        <ListDelete onClick={() => handleDelete(item.id)}>Deletar</ListDelete>
      </ListActions>
    </List>
  )
}

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
  cursor: pointer;
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
const ListEdit = styled(Link)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  cursor: pointer;
  font-size: 1.1em;
  height: 29px;
  padding: 0 ${({ theme }) => theme.spaces}px;
  text-decoration: none;
  width: auto;
`;
const ListDelete = styled(Button)`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  padding: ${({ theme }) => theme.spaces}px;
  margin-left: ${({ theme }) => theme.spaces}px;
  width: auto;
`;

export default ListTask;