import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { HeaderTask } from 'components/HeaderTask';
import { ListTask } from 'components/ListTask';
import { Modal } from 'components/Modal';
import { Button } from 'components/Button';
import { ViewTask } from 'components/ViewTask';
import { useTasks } from 'hooks';

const Home = () => {
  const {
    statusPage,
    tasks,
    task,
    addTasks,
    toggleModalTask,
    toggleModal,
    paginationTasks,
  } = useTasks();

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
      {statusPage && (
        <PaginationTasks>
          <PaginationButton onClick={() => paginationTasks()}>Carregar mais</PaginationButton>
        </PaginationTasks>
      )}
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
const PaginationTasks = styled.div`
  margin: calc(${({ theme }) => theme.spaces}px * 2) 0;
`;
const PaginationButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  font-size: 1.3em;
  padding: calc(${props => `${props.theme.spaces}px`} * 2) 0;
`;

export default Home;