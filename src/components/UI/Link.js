import React from "react";

const Link = ({ href, className, children }) => {
  return (
    <a
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
};

export default Link;
