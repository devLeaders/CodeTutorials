import * as React from 'react';
import {useEffect, useState} from 'react';
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
    display:block;
    max-width:443px;
    position:fixed;
    top:112px;
    right:0;
  }
`
const TemporaryTeamDiv = styled.div`
    width:443px;
    height:100vh;
    background-color:teal;
   
`
interface RootState  {
    asideType: string;
}

const Aside:React.FC = () => {
    const [type, setType] = useState('');

    const typeSelect = (state:RootState) => state.asideType;
    const type1 = useSelector(typeSelect);

    useEffect(() => {
        setType(type1)
    }, [typeSelect])

    return(
        <Wrapper>
            {type === "teams" && <TemporaryTeamDiv/>}
            {type === "cos" && <AsideNavigation/>}
            {type === "filters" && <Filters/>}
            {type === "allerts" && <AllertContainer/>}

        </Wrapper>
    )
}
export default Aside;