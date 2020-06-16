import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

export default (props) => {
  return (
    <Menu>
      <Link to="/">Expense Tracker</Link>

      <Link to="/todolist">Todo List</Link>

      <Link to="/covid19tracker">Covid-19 Tracker</Link>

      <Link to="/about">About</Link>
    </Menu>
  );
};
