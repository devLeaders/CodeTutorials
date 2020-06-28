import React from "react";
import styled from "styled-components";
import { FontSize } from "../../../common/styles/constans/FontSize";
import { Colors } from "../../../common/styles/constans/Colors";
import { fontWeight } from "../../../common/styles/constans/fontWeight";

const Title = styled.h1`
  color: ${Colors.nBlack};
  font-size: ${FontSize.BIG};
  font-weight: ${fontWeight.MEDIUM};
  padding-bottom: 50px;
`;
interface TitleFormProps {
  title: string;
}
const TitleForm: React.FC<TitleFormProps> = ({ title }) => {
  return <Title>{title}</Title>;
};

export default TitleForm;
