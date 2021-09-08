import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage, TasksPage, TaskPage, AboutPage, ErrorPage } from "./pages";
import "./styles/index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/tasks">
          <TasksPage />
        </Route>
        <Route exact path="/task/:id">
          <TaskPage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
