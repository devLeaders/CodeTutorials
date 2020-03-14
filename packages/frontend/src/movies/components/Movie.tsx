import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NavigationPath from "../../layouts/NavigationPath";

const Wrapper = styled(NavLink)`
  cursor: pointer;
  min-width: ${(props: { width: number }) => `${props.width - 1}%`};
  height: 100%;
  overflow: hidden;
  margin-right: 0.5%;
  margin-left: 0.5%;
  color: white;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

export interface MovieProps {
  id: number;
  index: number;
  width: number;
  ref?: any;
}

const Movie: React.ForwardRefExoticComponent<MovieProps> = React.forwardRef(
  (props: any, ref: any) => {
    const { index, width, id } = props;
    return (
      <Wrapper width={width} ref={ref} to={`${NavigationPath.MOVIES}/${id}`}>
        <Img
          src="https://cdn.pixabay.com/photo/2020/02/12/16/13/landscape-4843193_960_720.jpg"
          alt=""
        />
      </Wrapper>
    );
  }
);

export default Movie;
