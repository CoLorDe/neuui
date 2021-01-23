import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Home from './Home'

function Pages() {
  return(
      <div>
        <Switch>
          <Route exact path="/neuui">
            <Home />
          </Route>
        </Switch>
      </div>
  )
}

export default Pages;
