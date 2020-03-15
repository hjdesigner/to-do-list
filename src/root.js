import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { TasksProvider, ModalTaskProvider } from 'contexts'
import Theme from "./utils/theme";
import App from './App';

function Root () {
  return (
    <Fragment>
      <Theme>
        <TasksProvider>
          <ModalTaskProvider>
            <BrowserRouter>
              <Route component={App} />
            </BrowserRouter>
          </ModalTaskProvider>
        </TasksProvider>
      </Theme>
    </Fragment>
  ) 
}

export default Root;