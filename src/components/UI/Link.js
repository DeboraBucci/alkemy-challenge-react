import React from "react";

const Link = ({ link, className, children }) => {
  return (
    <a
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      href={`${link}`}
    >
      {children}
    </a>
  );
};

export default Link;
