import React from "react";
import Tag from "../Tag";
import deleteIcon from "../../assets/delete.png";

import "./TaskCard.css";

const TaskCard = () => {
  return (
    <article className="taskCard">
      <p className="taskText">This is a Sample Text.</p>

      <div className="taskCardBottomline">
        <div className="taskCardTags">
          <Tag tagName="HTML" />
          <Tag tagName="CSS" />
        </div>
        <div className="taskDelete">
          <img src={deleteIcon} alt="" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
