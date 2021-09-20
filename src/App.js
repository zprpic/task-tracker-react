import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage, TaskPage, AboutPage, ErrorPage } from "./pages";
import TasksPage from "./pages/TasksPage";
import "./styles/index.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/tasks">
          <Provider store={store}>
            <TasksPage />
          </Provider>
        </Route>
        <Route exact path="/tasks/:id">
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
