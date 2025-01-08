import React from "react";

import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskColumn from "./components/TaskColumn/TaskColumn";

import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const App = () => {
  return (
    <div className="app">
      {/* <header className="appHeader">Header Section</header> */}
      <TaskForm />
      <main className="appMain">
        <TaskColumn title="To Do" icon={todoIcon} />
        <TaskColumn title="Doing" icon={doingIcon} />
        <TaskColumn title="Done" icon={doneIcon} />
      </main>
    </div>
  );
};

export default App;
