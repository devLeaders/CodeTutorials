import React from 'react';
import VideoComponent from '../components/SingleVideoComponents/VideoComponent'
import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../utils/colors';
import { font } from '../utils/font';
import { breakPoint } from '../utils/breakPoint';

const GlobalStyle = createGlobalStyle`
body{
    font-family: ${font.mainFont};
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
  background-color: ${colors.backgroundBlack};

  @media only ${breakPoint.desktop} {
      flex-direction: row;
  }
`;

const SingleMoviePage: React.FC = (props: any) => {

    return (
        <>
            <GlobalStyle />
            < StyledVideoComponent >
                <VideoComponent></VideoComponent>
            </StyledVideoComponent >
        </>
    )
}

export default SingleMoviePage;