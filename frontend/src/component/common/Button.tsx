import React from "react";
import { BaseButtonProps } from "../../types/ButtonProps";

const Button = ({ children, ...rest }: BaseButtonProps) => {
    return <button {...rest}>{children}</button>;
}

export default Button;