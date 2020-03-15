import React, { createContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { node } from 'prop-types';

const TasksContext = createContext();

function TasksProvider ({ children }) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [toggleModalTask, setToggleModalTask] = useState(false);

  function toggleModal() {
    if (toggleModalTask) {
      setTask({});
    }
    setToggleModalTask(!toggleModalTask);
  }

  function addTasks() {
    axios.get('http://5e6b9daed708a000160b4bbc.mockapi.io/api/v1/task')
      .then((response) => {
        setTasks(response.data);
      })
      .catch(() => {
        toast.error('Houve um erro, atualize a pagina');
      });
  }

  function addTask(id) {
    axios.get(`http://5e6b9daed708a000160b4bbc.mockapi.io/api/v1/task/${id}`)
      .then((response) => {
        setTask(response.data);
      })
      .catch((error) => {
        toast.error('Houve um erro, atualize a pagina');
      });
  }

  function deleteTask(id) {
    axios.delete(`http://5e6b9daed708a000160b4bbc.mockapi.io/api/v1/task/${id}`)
      .then((response) => {
        toast.success('Tarefa deletada com sucesso');
        addTasks();
      })
      .catch((error) => {
        toast.error('Houve um erro, atualize a pagina');
      });
  }

  function editTask(id, status) {
    axios.put(`http://5e6b9daed708a000160b4bbc.mockapi.io/api/v1/task/${id}`, {
      finished: !status
    })
      .then((response) => {
        toast.success('Alteração realizada com sucesso');
        addTasks();
      })
      .catch((error) => {
        toast.error('Houve um erro, atualize a pagina');
      });
  }

  return (
    <TasksContext.Provider value={{
      tasks,
      task,
      toggleModalTask,
      addTasks,
      addTask,
      toggleModal,
      deleteTask,
      editTask,
    }}>
      {children}
    </TasksContext.Provider>
  );  
}

TasksProvider.propTypes = {
  children: node.isRequired,
};

export { TasksProvider, TasksContext };