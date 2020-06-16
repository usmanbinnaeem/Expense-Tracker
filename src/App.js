import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoList from "./Todos/TodoList";
import Sidebar from "./sidebar/Sidebar";
import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";
import Covid19Tracker from "./Covid-19-Tracker/Covid19Tracker";
import About from "./About/About";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Sidebar />
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <ExpenseTracker />
            </React.Fragment>
          )}
        />
        <Route path="/Covid19Tracker" component={Covid19Tracker} />
        <Route path="/TodoList" component={TodoList} />
        <Route path="/About" component={About} />
      </div>
    </Router>
  );
}

export default App;
