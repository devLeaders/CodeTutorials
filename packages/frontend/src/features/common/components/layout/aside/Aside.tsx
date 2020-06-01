import * as React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import AsideNavigation from '../asideNav/AsideNavigation';
import Filters from '../../../../filters/components/Filters';
import AllertContainer from '../../../../allertsPanel/components/AllertsContainer';
import {Colors} from '../../../styles/constans/Colors';
import {Device} from '../../../styles/constans/Device';

const Wrapper = styled.div`
   display:none;
    @media ${Device.LAPTOP} {
    border-left: 3px solid ${Colors.BLACK_OPACITY}; 
    display:inline-block;
    max-width:443px;
    position:fixed;
    top:112px;
    right:0;
    height:100%;
  }
`;
const TemporaryTeamDiv = styled.div`
    width:443px;
    height:100vh;
    background-color:teal;
   
`;
interface RootState  {
    type: any;
    navBarType: string;
};

const Aside:React.FC = () => {
    const asideType = useSelector((state:RootState) => state.type.navBarType);
    return(
        <Wrapper>
            {asideType === "teams" && <TemporaryTeamDiv/>}
            {asideType === "cos" && <AsideNavigation/>}
            {asideType === "filters" && <Filters/>}
            {asideType === "allerts" && <AllertContainer/>}
        </Wrapper>
    )
}
export default Aside;