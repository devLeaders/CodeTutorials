import * as React from 'react';
import styled from 'styled-components';

import { FontSize } from "../../../styles/constans/FontSize"
import { FontWeight } from '../../../styles/constans/fontWeight';
import { Device } from "../../../styles/constans/Device"
import {Colors} from "../../../styles/constans/Colors"

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    display: flex;
`
const UserPhoto = styled.img`
    width: 81px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: gray;
    @media ${Device.tablet}{
        width: 122px;
        margin-right: 33px;
    }
`
const TextInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    width: 201px;
    @media ${Device.tablet}{
        width: 215px;
    }
`

const UserInfoTxt = styled.p<{ email?: any, name?: any }>`
    max-width: 100%;
    margin-bottom: 4px;
    text-transform: ${props => props.name ? "capitalize" : "none"};
    font-size: ${props => props.name ? "20px" : "16px"};
    font-weight: ${props => props.email ? FontWeight.REGULAR : FontWeight.SEMI_BOLD};
    word-wrap: break-word;
    @media ${Device.tablet}{
        font-size: ${props => props.name ? "20px" : "16px"};
    }
`

const UserEmail = styled(UserInfoTxt)`
    font-size: "16px";
`
const LogoutBtn = styled.button`
    display: flex;
    position: absolute;
    padding: 5px 10px;
    bottom: 0;
    right: 10px;
    height: 26px;
    width: 95px;
    transform: translateY(50%);
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
    border: none;
    border-radius: 20px;
    outline: none;
    align-content: center;
    background-color: ${Colors.nWhite};
    justify-items: center;
`
const LogoutBtnText = styled.p`
    display: flex;
    align-items: center;
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