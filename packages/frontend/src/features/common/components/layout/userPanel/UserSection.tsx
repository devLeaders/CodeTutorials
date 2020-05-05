import * as React from 'react';
import styled from 'styled-components';

import { FontSize } from "../../../styles/constans/FontSize"
import { FontWeight } from '../../../styles/constans/fontWeight';

import UserData from "./UserData"

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 10px;
`

const ProfilTxt = styled.p`
    margin-bottom: 20px;
    font-size: ${FontSize.VERY_BIG};
    font-weight: ${FontWeight.BOLD};
    text-align: left;
`
const Ximg = styled.img`
    position:absolute;
    width: 30px;
    height: 30px;
    top: 0;
    right: 0;
`


const UserSection: React.SFC = () => {
    return (
        <Wrapper>
            <Ximg src="img/x-icon.svg" alt="" />
            <ProfilTxt>Profil</ProfilTxt>
            <UserData
                name="sebastian"
                email="sebastian@gmail.comdsadsadsadsadas"
                userType="mentor"
                userPhoto="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png"
            />
        </Wrapper>
    )
}

export default UserSection;