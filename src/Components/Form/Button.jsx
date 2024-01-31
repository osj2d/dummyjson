import React from "react";

const Button = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default Button;
