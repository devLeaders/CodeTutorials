import React from "react";
import { IButton } from "../../models/video.type";
import { Btn, BtnImg } from "../../styles/button.styles";

const Button: React.FC<IButton> = ({ action, icon }) => {
  return <Btn type='button' onClick={action}><BtnImg src={icon}/></Btn>;
};

export default Button;
