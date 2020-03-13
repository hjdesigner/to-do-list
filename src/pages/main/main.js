import React, { Fragment, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom'
import * as routes from 'utils/routes';
import Header from 'components/Header';

const Home = React.lazy(
  () => import('pages/home')
);
const AddTask = React.lazy(
  () => import('pages/addTask')
);
const EditTask = React.lazy(
  () => import('pages/edit')
);

const Main = () => (
  <Fragment>
    <Header />

    <Suspense fallback='Loading...'>
      <Switch>
        <Route
          path={routes.HOME}
          exact
          component={Home}
        />
        <Route
          path={routes.ADDTASK}
          exact
          component={AddTask}
        />
        <Route
          path={routes.EDITTASK}
          exact
          component={EditTask}
        />
      </Switch>
    </Suspense>
  </Fragment>
)

export default Main;