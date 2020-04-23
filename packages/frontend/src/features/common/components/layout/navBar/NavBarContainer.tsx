import * as React from 'react';
import styled from "styled-components"

import BtnsSection from "./BtnsSection"
import UserImg from "./UserImg"

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 55px;
`

 
const NavBarContainer: React.SFC = () => {
    return ( 
        <Wrapper>
            <BtnsSection/>
            <UserImg/>
        </Wrapper>
     );
}
 
export default NavBarContainer;