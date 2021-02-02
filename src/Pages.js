import React from 'react';
import { Switch, Route } from "react-router-dom";
import Examples from './Examples'
import Generator from './Generator'

function Pages() {
  return(
      <div>
        <Switch>
          <Route exact path="/neuui">
            <Generator />
          </Route>
          <Route exact path="/neuui/examples">
            <Examples />
          </Route>
        </Switch>
      </div>
  )
}

export default Pages;
