import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense } from 'react';
import Login from "../auth/Login";
import PrivateRoute from "./private-route/private.route";
import Preloader from "./preloader/PreloaderComponent";
import Home from "../pages/Home";
import UserIndex from "../modules/user/UserIndex";

const App = () => {
  
  return (
    <Suspense fallback={<Preloader />}>
      <Router>
          <Switch>
            <Route exact={true} path="/login" component={Login} />
            <PrivateRoute exact={true} path="/" Component={Home} />
            <PrivateRoute exact={true} path="/users" Component={UserIndex} />
          </Switch>
      </Router>
    </Suspense>
  );
}

export default React.memo(App);
