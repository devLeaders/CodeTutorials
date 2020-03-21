import * as React from 'react';
import styled from 'styled-components';

import { FontSize } from "../../../styles/constans/FontSize"

const Wrapper = styled.div`
    position: relative;
    display: flex;
`
const UserPhoto = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-right: 20px;
`
const TextInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-right: 20px;
`

const UserInfoTxt = styled.p<{ email?: any, name?: any }>`
    padding: 4px;
    font-size: ${props => props.name ? FontSize.MEDIUM : FontSize.VERY_SMALL};
    font-weight: ${props => props.email ? "" : "600"};
`

const UserEmail = styled(UserInfoTxt)`
    font-size: ${FontSize.SMALL};
`
const LogoutBtn = styled.button`
    display: flex;
    position: absolute;
    bottom: 0;
    right: 10px;
    min-height: 22px;
    min-width: 78px;
    transform: translateY(50%);
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
    border: none;
    border-radius: 20px;
    outline: none;
    text-align: left;
    
`
const LogoutBtnText = styled.p`
    font-size: 9px;
    margin-right: 10px;
`

const Img = styled.img`
    width: 15px;
    height: 12px;
`

export interface UserDataProps {
    name: string;
    email: string;
    userType: string;
}

const UserData: React.SFC<UserDataProps> = (props) => {
    const { name, email, userType } = props
    return (
        <Wrapper >
            <UserPhoto src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" />
            <TextInfoSection>
                <UserInfoTxt name="name">{name}</UserInfoTxt>
                <UserEmail email="email">{email}</UserEmail>
                <UserInfoTxt >{userType}</UserInfoTxt>
            </TextInfoSection>
            <LogoutBtn>
                <LogoutBtnText>Wyloguj</LogoutBtnText>
                <Img src="img/logout.svg" alt="" />
            </LogoutBtn>

        </Wrapper >
    );
}

export default UserData;