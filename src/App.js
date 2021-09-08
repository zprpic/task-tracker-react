import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import List from "./components/List";
import "./styles/index.css";
import Pagination from "./components/Pagination";

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <List />
      <Pagination />
    </>
  );
}

export default App;
