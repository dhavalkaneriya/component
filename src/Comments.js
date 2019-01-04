import React from "react";
import faker from "faker";

const Comments = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="not found" src={props.image} />
      </a>

      <div className="content">
        <a className="author">{props.author}</a>
        <div className="metadata">
          <span className="date">Today at 5:42PM</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export default Comments;
