/* eslint-disable */
import { useContext } from 'react';
import { TasksContext } from 'contexts';

function useTasks() {
  return useContext(TasksContext);
}

export default useTasks;