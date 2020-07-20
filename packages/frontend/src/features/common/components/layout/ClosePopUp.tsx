import * as React from 'react';
import styled from "styled-components"

import {usePopUp} from "../../hooks/usePopUp"

const Ximg = styled.img<{name: string}>`
  width: 30px;
  position: absolute;
  top: 13px;
  right: 13px;
  cursor: pointer;
`;

interface ClosePopUpProps {
  name: string
}
 
const ClosePopUp: React.SFC<ClosePopUpProps> = ({name}) => {
    const {closePopUp} = usePopUp()

    return ( <Ximg src="/img/allerts/x.svg" name={name} onClick={closePopUp}/> );
}
 
export default ClosePopUp;