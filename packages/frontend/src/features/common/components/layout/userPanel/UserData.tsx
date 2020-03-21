import * as React from 'react';
import styled from 'styled-components';

import { FontSize } from "../../../styles/constans/FontSize"
import Colors from "../../../styles/constans/Colors"

const Wrapper = styled.div`
    position: relative;
    display: flex;
`
const UserPhoto = styled.img`
    flex-basis: 122px;
    width: 122px;
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
    text-transform: ${props => props.name ? "capitalize" : "none"};
    font-size: ${props => props.name ? FontSize.BIG : FontSize.MEDIUM};
    font-weight: ${props => props.email ? "" : "600"};
    word-wrap: break-word;
`

const UserEmail = styled(UserInfoTxt)`
    font-size: ${FontSize.MEDIUM};
`
const LogoutBtn = styled.button`
    display: flex;
    position: absolute;
    padding:  5px 10px;
    bottom: 0;
    right: 10px;
    height: 26px;
    width: 95px;
    transform: translateY(50%);
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
    border: none;
    border-radius: 20px;
    outline: none;
    align-items: center;
    background-color: ${Colors.nWhite};
    justify-items: center;
`
const LogoutBtnText = styled.p`
    font-size: ${FontSize.SMALL};
    margin-right: 10px;
`

const Img = styled.img`
    width: 18px;
    height: 18px;
`

interface UserDataProps {
    name: string;
    email: string;
    userType: string;
    userPhoto: string;
}

const UserData: React.SFC<UserDataProps> = (props) => {
    const { name, email, userType, userPhoto } = props
    return (
        <Wrapper >
            <UserPhoto src={userPhoto} />
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