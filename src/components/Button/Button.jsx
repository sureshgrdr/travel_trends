import React from "react";

export const Button = ({ children, classType }) => {
  return <button className={`${classType}`}>{children}</button>;
};
