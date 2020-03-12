import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const MainPage = lazy(() => import('page/main'));

function App() {
  return (
    <Suspense fallback='<h1>Carregando</h1>'>
      <Switch>
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  );
}

export default App;
