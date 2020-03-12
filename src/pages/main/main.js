import React, { Fragment, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom'
import * as routes from 'utils/routes';
import Header from 'components/Header';



const Home = React.lazy(
  () => import('pages/home')
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
      </Switch>
    </Suspense>
  </Fragment>
)

export default Main;