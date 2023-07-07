import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled , className}: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={disabled} className={disabled ? "disabled" : className} >{title}</ButtonContainer>;
};

export default Button;
