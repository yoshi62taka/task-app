import { BaseInputTextProps } from "../../types/InputTypeProps";

const InputText = (props: BaseInputTextProps) => {
  return <input className="input-text" {...props} />;
};

export default InputText;
