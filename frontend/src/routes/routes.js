import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Join from '../pages/join/join';
import Chat from '../pages/chat/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Join } />
        <Route exact path="/chat" component={ Chat } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;