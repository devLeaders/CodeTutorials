import * as React from "react";
import styled from "styled-components";
import { Device } from "../../styles/constans/Device";
import { Colors } from "../../styles/constans/Colors";
import NavBar from "./navBar/NavBar";
import VideoTabs from "./videoTabs/VideoTabs";
import PopUps from "./PopUps"
import Filters from "../../../filters/components/Filters"


const Wrapper = styled.aside<{ singleMovie?: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  display: none;
  flex-direction: column;
  height: 100vh;
  @media ${Device.LAPTOP} {
    display: flex;
    border-left: 3px solid ${Colors.BLACK_OPACITY};
  }
`;

interface AsideProps  {
  tabs?: boolean
}

const Aside: React.FC<AsideProps> = ({tabs}) => {
  return (
    <Wrapper>
      <PopUps/>
      <NavBar />
      {tabs ? <VideoTabs aside={true}/> : <Filters/>}
    </Wrapper>
  );
};

export default Aside;
