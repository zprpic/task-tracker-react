import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <ul>
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/about">About</Link>
    </ul>
  );
};
