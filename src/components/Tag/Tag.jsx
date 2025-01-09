import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag }) => {
  // console.log("props", props);
  return (
    <button type="button" onClick={() => selectTag(tagName)} className="tag">
      {tagName}
    </button>
  );
};

export default Tag;
