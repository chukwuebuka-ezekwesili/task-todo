import React from "react";
import Todo from "../../assets/direct-hit.png";

import "./TaskColumn.css";

const TaskColumn = ({ title, icon }) => {
  //   console.log("props", props);
  //   console.log("todo", Todo);

  //   const { title, icon } = props; DYSTRUCTURING CAN BE DONE LIKE THIS BUT THE UPPER ONE IS THE BEST USECASE AND PROVIDES A MORE CLEANER CODE

  return (
    <section className="taskColumn">
      <h2 className="taskColumnHeading">
        <img className="taskColumnIcon" src={icon} alt="" />
        {title}
      </h2>
    </section>
    // <section className="taskColumn">Section 2</section>
    // <section className="taskColumn">Section 3</section>
  );
};

export default TaskColumn;
