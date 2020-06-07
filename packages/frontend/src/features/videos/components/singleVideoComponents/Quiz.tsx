import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Colors } from "../../../common/styles/constans/Colors";
import { Device } from "../../../common/styles/constans/Device";
import { fontWeight } from "../../../common/styles/constans/fontWeight";
import { FontSize } from "../../../common/styles/constans/FontSize";

const Wrapper = styled.div`
  margin: 25px auto;
  max-width: 482px;
  box-shadow: 0px 0px 2px 2px ${Colors.OPACITY_GRAY};
  padding: 16px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  @media ${Device.tablet} {
    padding: 33px;
  }
`;
const Title = styled.h3`
  color: ${Colors.nBlack};
  font-weight: bold;
  text-align: left;
  font-size: ${FontSize.VERYLARGE};
  margin-bottom: 34px;
`;
const Desc = styled.p`
  max-width: 442px;
  font-size: ${FontSize.SMALL};
  line-height: 22px;
  margin-bottom: 25px;
`;
const Button = styled(NavLink)`
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: ${fontWeight.BOLD};
  background-color: ${Colors.BLACK};
  color: ${Colors.WHITE};
  margin: 0 auto;
`;

const Quiz: React.FC = () => {
  return (
    <Wrapper>
      <Title>Sprawdź swoją wiedzę</Title>
      <Desc>
        'In sed tristique anthe, vitae eleifend erat. Curabitur euismod eros nec
        tincidunt molestie. Donec maximus, nunc ut dapibus aliquet, lacus nisl
        rhoncus nisi'
      </Desc>
      <Button to={""}>Rozpocznij</Button>
    </Wrapper>
  );
};
export default Quiz;
