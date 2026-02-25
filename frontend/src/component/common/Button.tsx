import React, { ElementType } from "react";
import "../../styles/common.css";
import { BaseButtonProps } from "../../types/ButtonProps";

const Button = <T extends ElementType = "button">({
  as,
  children,
  ...rest
}: BaseButtonProps<T>) => {
  const Component = as || "button";

  return (
    <Component className="submit-button" {...rest}>
      {children}
    </Component>
  );
};

export default Button;
