import React from "react";
import { BaseButtonProps } from "../../types/ButtonProps";
import "../../styles/common.css";

const Button = ({ children, ...rest }: BaseButtonProps) => {
  return (
    <button className="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
