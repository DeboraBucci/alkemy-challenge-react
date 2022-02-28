import React from "react";

const Link = ({ href, className, children, name }) => {
  return (
    <a
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      aria-label={name}
    >
      {children}
    </a>
  );
};

export default Link;
