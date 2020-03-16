import React, { createContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { node } from 'prop-types';

const TasksContext = createContext();

function TasksProvider ({ children }) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [toggleModalTask, setToggleModalTask] = useState(false);
  const [limit] = useState(5);
  const [page, setPage] = useState(1);
  const [statusPage, setStatusPage] = useState(true);
  const [filter, setFilter] = useState('');

  function toggleModal() {
    if (toggleModalTask) {
      setTask({});
    }
    setToggleModalTask(!toggleModalTask);
  }

  function addTasks(valueFilter) {
    axios.get(`http://5e6b9daed708a000160b4bbc.mockapi.io/api/v1/task?page=1&limit=${limit}`)
      .then((response) => {
        if (valueFilter !== undefined && valueFilter !== '') {
          const filterTasks = response.data.filter(item => item.finished.toString() === valueFilter);
          setTasks(filterTasks);
        } else {
          setTasks(response.data);        
        }

        setPage(1);
        setStatusPage(true);        
      })
      .catch(() => {
        toast.error('Houve um erro, atualize a pagina');
      });
  }
  function paginationTasks() {
    const newPage = page + 1;
    axios.get(`http://5e6b9daed708a000160b4bbc.mockapi.io/api/v1/task?page=${newPage}&limit=${limit}`)
      .then((response) => {
        if (response.data.length === 0) {
          setStatusPage(false);
        }
        if (filter !== undefined  && filter !== '') {
          const filterTasks = response.data.filter(item => item.finished.toString() === filter);
          setTasks(tasks.concat(filterTasks));
        } else {
          setTasks(tasks.concat(response.data));
        }
        setPage(newPage);
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
      .catch(() => {
        toast.error('Houve um erro, atualize a pagina');
      });
  }

  function deleteTask(id) {
    axios.delete(`http://5e6b9daed708a000160b4bbc.mockapi.io/api/v1/task/${id}`)
      .then(() => {
        toast.success('Tarefa deletada com sucesso');
        addTasks();
      })
      .catch(() => {
        toast.error('Houve um erro, atualize a pagina');
      });
  }

  function editTask(id, status) {
    axios.put(`http://5e6b9daed708a000160b4bbc.mockapi.io/api/v1/task/${id}`, {
      finished: !status
    })
      .then(() => {
        toast.success('Alteração realizada com sucesso');
        addTasks();
      })
      .catch(() => {
        toast.error('Houve um erro, atualize a pagina');
      });
  }
  
  function filterSet(value) {
    setFilter(value);
    addTasks(value);
  }

  function filterEmpty() {
    setFilter('');
  }

  return (
    <TasksContext.Provider value={{
      tasks,
      task,
      toggleModalTask,
      statusPage,
      filter,
      addTasks,
      addTask,
      toggleModal,
      deleteTask,
      editTask,
      paginationTasks,
      filterSet,
      filterEmpty,
    }}>
      {children}
    </TasksContext.Provider>
  );  
}

TasksProvider.propTypes = {
  children: node.isRequired,
};

export { TasksProvider, TasksContext };