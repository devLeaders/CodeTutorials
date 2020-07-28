import * as React from "react";
import styled from "styled-components";
import { FontSize } from "../../../common/styles/constans/FontSize";
import { fontWeight } from "../../../common/styles/constans/fontWeight";
import { Device } from "../../../common/styles/constans/Device";

const Title = styled.h2`
  width: 100%;
  text-align: left;
  font-size: ${FontSize.SMALL};
  margin: 0 0 2px 0;
  font-weight: ${fontWeight.BOLD};
  @media ${Device.TABLET} {
    font-size: ${FontSize.BIG};
    margin-bottom: 4px;
  }
  @media ${Device.LAPTOP_L} {
    margin-bottom: 4px;
  }
`;

const Author = styled.h4`
  text-align: left;
  margin: 0;
  font-size: ${FontSize.XXXXXSMALL};
  font-weight: ${fontWeight.REGULAR};
  @media ${Device.TABLET} {
    font-size: ${FontSize.XXMEDIUM};
  }
`;

interface TitleAndAuthorProps {
  title: string;
  author: string;
}

const TitleAndAuthor: React.SFC<TitleAndAuthorProps> = ({ title, author }) => {
  return (
    <>
      <Title>{title}</Title>
      <Author>{author}</Author>
    </>
  );
};

export default TitleAndAuthor;
