import React from 'react';
import VideoComponent from '../components/SingleVideoComponents/VideoComponent'
import styled, { createGlobalStyle } from 'styled-components';
import { Colors } from '../utils/colors';
import { fontFamily } from '../utils/fontFamily';
import { breakPoint } from '../utils/breakPoint';
import FooterComponent from '../components/FooterComponents/FooterComponent';
import { getMovie } from "../utils/movieArray";
import { useEffect, useState } from "react";

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
  background-color: ${Colors.backgroundMain};

  @media screen and (min-width: ${breakPoint.desktop}) {
      flex-direction: row;
  }
`;

const SingleMoviePage: React.FC = (props: any) => {
    const [movieArray, setMovieArray] = useState(new Array());

    useEffect(() => {
        setMovieArray(getMovie());
    }, []);

    return (
        <>
            <GlobalStyle />
            < StyledVideoComponent >

                {movieArray.map(el => {
                    return (
                        <VideoComponent
                            key={el.name}
                            name={el.name}
                            rate={el.rate}
                        />
                    );
                })}


            </StyledVideoComponent >
            <FooterComponent></FooterComponent>
        </>
    )
}

export default SingleMoviePage;