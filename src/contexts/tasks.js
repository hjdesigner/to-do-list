import React, { createContext, useState } from 'react';
import { node } from 'prop-types';

const TasksContext = createContext();

function TasksProvider ({ children }) {
  const [tasks, setTasks] = useState([]);

  function addTasks(value) {
    setTasks(value);
  }

  return (
    <TasksContext.Provider value={{
      tasks,
      addTasks
    }}>
      {children}
    </TasksContext.Provider>
  );  
}

TasksProvider.propTypes = {
  children: node.isRequired,
};

export { TasksProvider, TasksContext };