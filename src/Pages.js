import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home'
import Generator from './components/Generator'

function Pages() {
  return(
      <div>
        <Switch>
          <Route exact path="/neuui">
            <Home />
          </Route>
          <Route exact path="/neuui/css-gen">
            <Generator />
          </Route>
        </Switch>
      </div>
  )
}

export default Pages;
