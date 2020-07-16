import * as React from "react";
import styled, { css } from "styled-components";

import { FontSize } from "../../../styles/constans/FontSize";
import { fontWeight } from "../../../styles/constans/fontWeight";
import { Device } from "../../../styles/constans/Device";
import { Colors } from "../../../styles/constans/Colors";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;
const UserPhoto = styled.img`
  width: 81px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: gray;
  @media ${Device.TABLET} {
    width: 122px;
    margin-right: 33px;
  }
`;
const TextInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  width: 201px;
  @media ${Device.TABLET} {
    width: 215px;
  }
`;

const UserInfoTxt = styled.p<{ type?: string }>`
  max-width: 100%;
  margin-bottom: 4px;
  font-size: ${FontSize.XXXXMEDIUM};
  font-weight: ${({type}) =>
    type === TextTypes.EMAIL ? fontWeight.REGULAR : fontWeight.SEMI_BOLD};
  word-wrap: break-word;

  ${({ type }) =>
    type === TextTypes.NAME &&
    css`
      text-transform: capitalize;
      font-size: ${FontSize.MEDIUM};
    `}
`;

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
`;
const LogoutBtnText = styled.p`
  display: flex;
  align-items: center;
  font-size: ${FontSize.XXXSMALL};
  margin-right: 10px;
`;

const Img = styled.img`
  width: 18px;
  height: 18px;
`;

interface UserDataProps {
  name: string;
  email: string;
  userType: string;
  userPhoto: string;
}

enum TextTypes  {
  EMAIL = "email",
  NAME = "name"
}

const UserData: React.SFC<UserDataProps> = (props) => {
  const { name, email, userType, userPhoto } = props;
  return (
    <Wrapper>
      <UserPhoto src={userPhoto} />
      <TextInfoSection>
        <UserInfoTxt type={TextTypes.NAME}>{name}</UserInfoTxt>
        <UserInfoTxt type={TextTypes.EMAIL}>{email}</UserInfoTxt>
        <UserInfoTxt>{userType}</UserInfoTxt>
      </TextInfoSection>
      <LogoutBtn>
        <LogoutBtnText>Wyloguj</LogoutBtnText>
        <Img src="/img/logout.svg" alt="" />
      </LogoutBtn>
    </Wrapper>
  );
};

export default UserData;
