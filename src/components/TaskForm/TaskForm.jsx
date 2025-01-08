import React from "react";
import "./TaskForm.css";
import Tag from "../Tag/Tag";
// import "./Tag.jsx";

const TaskForm = () => {
  return (
    <header className="appHeader">
      <form>
        <input
          type="text"
          className="taskInput"
          placeholder="Enter your Task"
        />

        <div className="taskBottomLine">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS"/>
            <Tag tagName="JavaScript"/>
            <Tag tagName="React"/>

            {/* <button className="tag">HTML</button>
            <button className="tag">CSS</button>
            <button className="tag">JavaScript</button>
            <button className="tag">React</button> */}
          </div>

          <div>
            <select className="taskStatus">
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button type="submit" className="taskSubmit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
