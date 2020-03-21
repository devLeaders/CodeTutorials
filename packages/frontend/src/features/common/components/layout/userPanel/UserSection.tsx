import * as React from 'react';
import styled from 'styled-components';
import { FontSize } from "../../../styles/constans/FontSize"

import UserData from "./UserData"

const Wrapper = styled.div`
    padding-bottom: 10px;
`

const ProfilTxt = styled.p`
    margin-bottom: 20px;
    font-size: ${FontSize.VERY_BIG};
    font-weight: bold;
    text-align: left;
`


const UserSection: React.SFC = () => {
    return (
        <Wrapper>
            <ProfilTxt>Profil</ProfilTxt>
            <UserData name="sebastian" email="sebastian@gmail.com" userType="mentor" />
        </Wrapper>
    )
}

export default UserSection;