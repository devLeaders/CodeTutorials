import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Colors } from "../../../common/styles/constans/Colors";
import { Device } from "../../../common/styles/constans/Device";
import { fontWeight } from "../../../common/styles/constans/fontWeight";
import { FontSize } from "../../../common/styles/constans/FontSize";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 36px auto;
  width: 300px;
  box-shadow: 0px 0px 2px 2px ${Colors.OPACITY_GRAY};
  padding: 16px;
  border-radius: 20px;
  @media ${Device.TABLET} {
    padding: 33px;
    width: 482px;
    margin: 36px 0 36px 21px;
  }
`;
const Title = styled.h3`
  color: ${Colors.nBlack};
  font-weight: bold;
  text-align: left;
  font-size: ${FontSize.MEDIUM};
  margin-bottom: 34px;
  @media ${Device.TABLET} {
    font-size: ${FontSize.XXMEDIUM_L};
  }
`;
const Desc = styled.p`
  max-width: 442px;
  font-size: ${FontSize.SMALL};
  margin: 0 0 25px 0;
  @media ${Device.TABLET} {
    font-size: ${FontSize.XXMEDIUM};
  }
`;
const Button = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  width: 250px;
  height: 69px;
  padding: 24px 30px;
  border-radius: 30px;
  background-color: ${Colors.BLACK};
  color: ${Colors.WHITE};
  margin: 0 auto;
  font-weight: ${fontWeight.BOLD};
  font-size: ${FontSize.XXMEDIUM};
  @media ${Device.TABLET} {
    width: 277px;
  }
`;
const desc = `In sed tristique anthe, vitae eleifend erat. Curabitur euismod eros nec
tincidunt molestie. Donec maximus, nunc ut dapibus aliquet, lacus nisl
rhoncus nisi`;

const Quiz: React.FC = () => {
  return (
    <Wrapper>
      <Title>Sprawdź swoją wiedzę</Title>
      <Desc>{desc}</Desc>
      <Button to={""}>Rozpocznij</Button>
    </Wrapper>
  );
};
export default Quiz;
