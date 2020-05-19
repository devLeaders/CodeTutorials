import React from "react";
import { useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "../utils/colors";
import { fontFamily } from "../utils/fontFamily";
import { breakPoint } from "../utils/breakPoint";
import FooterComponent from "../components/footerComponent/FooterComponent";
import { getMovie } from "../singleMovie/actions/movieArray";
import { useEffect, useState } from "react";
import VideoDescribeComponent from "../singleMovie/components/VideoDescribeComponent";
import VideoPlayerComponent from "../features/videoPlayer/VideoPlayerComponent";
import { RouteComponentProps } from "react-router-dom";

const Wrapper = styled.div`
  overflow: hidden;
`

const StyledVideoComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  background-color: ${Colors.backgroundMain};
`;

interface SingleMovieProps {
  id: string;
}

const SingleMoviePage: React.FC<RouteComponentProps<
  SingleMovieProps
>> = props => {
  const [movie, setMovieArray] = useState({
    id: 0,
    name: "",
    rate: 0,
    hashtag: [""],
    level: "",
    date: "",
    describe: ""
  });
  useEffect(() => {
    setMovieArray(getMovie(props.match.params.id));
  }, []);

  return (
    <Wrapper>
      <StyledVideoComponent>
        <VideoDescribeComponent
          name={movie.name}
          rate={movie.rate}
        ></VideoDescribeComponent>
        <VideoPlayerComponent></VideoPlayerComponent>
      </StyledVideoComponent>
      <FooterComponent></FooterComponent>
    </Wrapper>
  );
};

export default SingleMoviePage;
