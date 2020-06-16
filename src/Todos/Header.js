import React from "react";

const Header = () => {
  return (
    <div style={todoHeader}>
      <h1>Todo List</h1>
    </div>
  );
};

const todoHeader = {
  backgroundColor: "#545454",
  color: "#fff",
  fontSize: "130%",
  position: "relative",
  padding: "40px 15px",
  textAlign: "center",
};

export default Header;
