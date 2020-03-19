import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NavigationPath from "../../../../config/routing/NavigationPath";

const Wrapper = styled(NavLink)`
  cursor: pointer;
  min-width: ${(props: { width: number }) => `${props.width - 1}%`};
  height: 292px;
  overflow: hidden;
  margin-right: 0.5%;
  margin-left: 0.5%;
  color: white;
  border: 2px solid black;
`;

const Img = styled.img`
  height: 80%;
  width: 100%;
  border-radius: 2px;
`;

const InfoWrapper = styled.div`

`;
const Title = styled.div`

`;

const PostedText = styled.div`

`;

const ButtonWrapper = styled.div`
`;






export interface MovieProps {
  id: number;
  index: number;
  width: number;
  ref?: any;
}

const Movie: React.ForwardRefExoticComponent<MovieProps> = React.forwardRef(
  (props: any, ref: any) => {
    const { width, id } = props;
    return (
      <Wrapper width={width} ref={ref} to={`${NavigationPath.MOVIES}/${id}`}>
        <Img
          src="https://cdn.pixabay.com/photo/2020/02/12/16/13/landscape-4843193_960_720.jpg"
          alt=""
        />
        <InfoWrapper>
          <Title>ok</Title>
          <PostedText>ok</PostedText>

        </InfoWrapper>

      </Wrapper>
     
    );
  }
);

export default Movie;
