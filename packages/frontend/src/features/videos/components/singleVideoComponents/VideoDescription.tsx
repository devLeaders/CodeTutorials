import * as React from "react";
import styled from "styled-components";
import TitleAndAuthor from "./TitleAndAuthor";
import Description from "./Description";
import TechCell from "./TechCell";
import { Device } from "../../../common/styles/constans/Device";

const Wrapper = styled.div`
  padding: 12px 11px;
  display: flex;
  flex-direction: column;
  @media ${Device.TABLET} {
    padding: 40px 48px 40px 22px;
    width: calc(100% - 500px);
    max-width: 819px;
  }
  @media ${Device.LAPTOP} {
    padding: 40px 0 40px 22px;
  }
`;
const TechWrapper = styled.div`
  display: flex;
`;

const desc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe quis pariatur blanditiis sapiente unde voluptas ullam, repellendus non est consequuntur enim, debitis aliquid labore facilis qui vel laborum magni.";

const technologies = ["Docker", "DevOps", "Aws"];

const VideoDescription: React.SFC = () => {
  return (
    <Wrapper>
      <TitleAndAuthor title='Doker od podstaw' author='Przemysław Bykowski' />
      <Description desc={desc} />
      <TechWrapper>
        {technologies.map((technology: string) => (
          <TechCell key={technology} technology={technology} />
        ))}
      </TechWrapper>
    </Wrapper>
  );
};

export default VideoDescription;
