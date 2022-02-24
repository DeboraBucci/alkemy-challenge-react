import React from "react";

const ErrorText = (props) => {
  return (
    <div
      style={{
        color: "#d88999",
        textShadow: "0 0 5px rgba(0,0,0,0.5)",
      }}
    >
      {props.children}
    </div>
  );
};

export default ErrorText;
