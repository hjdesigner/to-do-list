import React, { createContext, useState } from 'react';
import { node } from 'prop-types';

const ModalTaskContext = createContext();

function ModalTaskProvider ({ children }) {
  const [toggleModalTask, setToggleModalTask] = useState(false);

  function toggleModal() {
    setToggleModalTask(!toggleModalTask);
  }

  return (
    <ModalTaskContext.Provider value={{
      toggleModalTask,
      toggleModal
    }}>
      {children}
    </ModalTaskContext.Provider>
  );  
}

ModalTaskProvider.propTypes = {
  children: node.isRequired,
};

export { ModalTaskProvider, ModalTaskContext };