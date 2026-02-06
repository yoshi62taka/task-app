import React from "react";
import { BaseInputTextProps } from "../../types/InputTextProps";

const InputText = (props: BaseInputTextProps) => {
  return <input className="input-text" {...props} />;
};

export default InputText;
