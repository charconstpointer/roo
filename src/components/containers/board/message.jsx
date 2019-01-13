import React from "react";

const message = props => {
  return (
    <div>
      <h5>{props.sender}</h5>
      <h3>{props.body}</h3>
    </div>
  );
};

export default message;
