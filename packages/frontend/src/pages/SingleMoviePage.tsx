import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../utils/colors';
import { fontFamily } from '../utils/fontFamily';
import { breakPoint } from '../utils/breakPoint';
import FooterComponent from '../components/FooterComponents/FooterComponent';
import { getMovie } from "../utils/movieArray";
import { useEffect, useState } from "react";
import VideoDescribeComponent from '../components/SingleVideoComponents/VideoDescribeComponent';
import VideoPlayerComponent from '../components/SingleVideoComponents/VideoPlayerComponent';
import { RouteComponentProps } from 'react-router-dom';


const GlobalStyle = createGlobalStyle`
body{
    font-family: ${fontFamily.openSansFont};
    padding: 0;
    margin:0;
}
*, *::before, *::after {
    box-sizing: border-box;
}
`;

const StyledVideoComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  background-color: ${colors.backgroundMain};

  @media screen and (min-width: ${breakPoint.desktop}) {
      flex-direction: row;
  }
`;

interface SingleMovieProps {
    id: string,
}

const SingleMoviePage: React.FC<RouteComponentProps<SingleMovieProps>> = (props) => {
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
    }, [props.match.params.id]);

    return (
        <>
            <GlobalStyle />
            <StyledVideoComponent >
                <VideoDescribeComponent name={movie.name} rate={movie.rate}></VideoDescribeComponent>
                <VideoPlayerComponent></VideoPlayerComponent>
            </StyledVideoComponent >
            <FooterComponent></FooterComponent>
        </>
    )
}

export default SingleMoviePage;