import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { HeaderTask } from 'components/HeaderTask';
import { ListTask } from 'components/ListTask';
import { Modal } from 'components/Modal';
import { ViewTask } from 'components/ViewTask';
import { useTasks } from 'hooks';

const Home = () => {
  const { tasks, task, addTasks, toggleModalTask, toggleModal } = useTasks();

  useEffect(() => {
    addTasks();
  // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <HeaderTask />
      <Tasks>
        {tasks.map((items) => <ListTask key={items.id} item={items} />)}
      </Tasks>
      <ToastContainer />
      {toggleModalTask && (
        <Modal title='Tarefa' open={toggleModalTask} handleClose={toggleModal}>
          <ViewTask item={task} />
        </Modal>
      )}
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