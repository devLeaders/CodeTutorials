import * as React from 'react';
import styled from 'styled-components';
import { FontSize } from "../../../styles/constans/FontSize"

import UserData from "./UserData"

const Wrapper = styled.div`
    padding-top: 14px;
    padding-left: 8px;
    padding-bottom: 10px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
`

const ProfilTxt = styled.p`
    margin-bottom: 20px;
    font-size: ${FontSize.VERY_BIG};
    font-weight: bold;
`

export interface UserSectionProps {

}

const UserSection: React.SFC<UserSectionProps> = () => {
    return (
        <Wrapper>
            <ProfilTxt>Profil</ProfilTxt>
            <UserData name="sebastian" email="sebastian@gmail.com" userType="mentor" />
        </Wrapper>
    )
}

export default UserSection;