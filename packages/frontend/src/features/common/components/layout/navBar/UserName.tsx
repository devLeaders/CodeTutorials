import * as React from "react";
import styled from "styled-components";

import { Device } from "../../../styles/constans/Device";
import { fontWeight } from "../../../styles/constans/fontWeight";
import { FontSize } from "../../../styles/constans/FontSize";

const Name = styled.h4`
    display: none;
    font-size: ${FontSize.MEDIUM};
    font-weight: ${fontWeight.SEMI_BOLD};
    margin-left: 9px;
    margin-right: 9px;
    @media ${Device.LAPTOP}{
        display: block;
    }
`;

export interface UserNameProps {
  name: string;
}

const UserName: React.SFC<UserNameProps> = ({ name }) => {
  return <Name>{name}</Name>;
};

export default UserName;
