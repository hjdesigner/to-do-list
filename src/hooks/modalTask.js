/* eslint-disable */
import { useContext } from 'react';
import { ModalTaskContext } from 'contexts';

function useModalTask() {
  return useContext(ModalTaskContext);
}

export default useModalTask;