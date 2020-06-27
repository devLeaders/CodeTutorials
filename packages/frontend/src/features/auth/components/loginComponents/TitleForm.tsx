import React from "react";
import styled from "styled-components";
import { FontSize } from "../../../common/styles/constans/FontSize";
import { Colors } from "../../../common/styles/constans/Colors";
import { fontWeight } from "../../../common/styles/constans/fontWeight";

const Title = styled.h1`
  width: 100%;
  color: ${Colors.nBlack};
  font-size: ${FontSize.BIG};
  font-weight: ${fontWeight.MEDIUM};
  text-align: left;
  padding-bottom: 50px;
`;
interface TitleFormProps {
  title: string;
}
const TitleForm: React.FC<TitleFormProps> = (props: { title: string }) => {
  return <Title>{props.title}</Title>;
};

export default TitleForm;
