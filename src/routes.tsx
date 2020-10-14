import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import OphanagesMap from "./pages/OphanagesMap";
import CreateOrphanage from "./pages/CreateOrphanage";
import Orphanage from "./pages/Orphanage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OphanagesMap} />
        <Route path="/orphanages" exact component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
