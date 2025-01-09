import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "../Tag/Tag.jsx";

// import "./Tag.jsx";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item == tag)) {
      taskData.tags.filter((item) => item !== tag);
    }
    console.log(tag);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });

    // console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

  // console.log(taskData);

  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");

  // const handleTaskChange = (e) => {
  //   setTask(e.target.value);
  // };

  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };

  // console.log(task, status);

  return (
    <header className="appHeader">
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          type="text"
          className="taskInput"
          placeholder="Enter your Task"
          onChange={handleChange}
        />

        <div className="taskBottomLine">
          <div>
            <Tag tagName="HTML" selectTag={selectTag} />
            <Tag tagName="CSS" selectTag={selectTag} />
            <Tag tagName="JavaScript" selectTag={selectTag} />
            <Tag tagName="React" selectTag={selectTag} />

            {/* <button className="tag">HTML</button>
            <button className="tag">CSS</button>
            <button className="tag">JavaScript</button>
            <button className="tag">React</button> */}
          </div>

          <div>
            <select
              name="status"
              className="taskStatus"
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button
              onSubmit={handleSubmit}
              type="submit"
              className="taskSubmit"
            >
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
