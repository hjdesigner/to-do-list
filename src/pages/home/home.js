import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { HeaderTask } from 'components/HeaderTask';
import { ListTask } from 'components/ListTask';
import { useTasks } from 'hooks';

const Home = () => {
  const { tasks, addTasks } = useTasks();

  useEffect(() => {
    axios.get('http://5e6b9daed708a000160b4bbc.mockapi.io/api/v1/task')
      .then((response) => {
        addTasks(response.data);
      })
      .catch((error) => {
        toast.error('Houve um erro, atualize a pagina');
      });
  // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <HeaderTask />
      <Tasks>
        {tasks.map((items) => <ListTask key={items.id} item={items} />)}
      </Tasks>
      <ToastContainer />
    </Container>
  )
}

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