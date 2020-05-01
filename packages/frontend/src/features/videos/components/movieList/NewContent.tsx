import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 75%;
  width: 100%;
  background-color: black;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export interface NewContentProps {}

const NewContent: React.SFC<NewContentProps> = () => {
  return (
    <Wrapper>
      <Img
        src="https://cdn.pixabay.com/photo/2020/02/12/16/13/landscape-4843193_960_720.jpg"
        alt=""
      />
    </Wrapper>
  );
};

export default NewContent;
