import React from "react";
import { IButton } from "../../models/video.type";
import { Btn } from "../../styles/button.styles";

const Button: React.FC<IButton> = ({ action, icon }) => {
  return <Btn type='button' onClick={action} icon={icon} />;
};

export default Button;
