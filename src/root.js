import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Theme from "./utils/theme";
import App from './App';

function Root () {
  return (
    <Fragment>
      <Theme>
        <BrowserRouter>
          <Route component={App} />
        </BrowserRouter>
      </Theme>
    </Fragment>
  ) 
}

export default Root;