import React from "react";
import { Container } from "./style";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { sidebar } from "../utils/sidebar";
import Notfound from "../components/Notfound";
import Login from "../components/Login";

export const Root = () => {
  return (
    <Container>
      <Router>
        <Switch>
          {sidebar.map(({ id, path }) => (
            <Route key={id} path={path} component={Sidebar} />
          ))}
        </Switch>

        <Switch>
          <Route exact path="/" component={Login} />
          {sidebar.map(({ Component, id, path }) => (
            <Route key={id} path={path} component={Component} />
          ))}
          <Route path="*" component={Notfound} />
        </Switch>
      </Router>
    </Container>
  );
};

export default Root;
