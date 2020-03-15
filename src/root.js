import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { TasksProvider } from 'contexts'
import Theme from "./utils/theme";
import App from './App';

function Root () {
  return (
    <Fragment>
      <Theme>
        <TasksProvider>
          <BrowserRouter>
            <Route component={App} />
          </BrowserRouter>
        </TasksProvider>
      </Theme>
    </Fragment>
  ) 
}

export default Root;