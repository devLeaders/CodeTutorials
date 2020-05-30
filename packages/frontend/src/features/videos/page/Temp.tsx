import * as React from "react";
import styled from "styled-components";
import Filters from "../../filters/components/Filters";
import BannerContainer from "../../common/components/layout/banner/BannerContainer";
import NavBarContainer from '../../common/components/layout/navBar/NavBarContainer';
import {Device} from '../../common/styles/constans/Device';

const Wrapper = styled.div`
display:flex;
flex-direction:row;
padding-top:110px;
`
const HeaderWrapper = styled.div`
z-index:2;
display:flex;
flex-direction:row;
width:100%;
justify-content:space-around;
position:fixed;
top:0;
`
const MovieListConstainer = styled.div`
margin-top: 38px;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
 @media ${Device.LAPTOP} {
    width:calc(100% - 475px);
  }
`
const MainSectionWrapper = styled.div`
display:flex;
`

const Temp: React.SFC = () => {
  return (
    <Wrapper>
        <HeaderWrapper>
                <BannerContainer/>
                <NavBarContainer/>
            </HeaderWrapper>
            <MainSectionWrapper>
               <Filters/>
            </MainSectionWrapper >
    </Wrapper>
  );
};

export default Temp;
