import React, { Component } from 'react'
import styled from 'styled-components';
import { font } from '../../utils/font';
import { colors } from '../../utils/colors';

const StyledRate = styled.section`
    width:100%;
    color: ${colors.colorMainFont};
    text-align: left;
    font-family: 'Roboto';

  .videoRating__rate {
        display:flex;
        align-items: center;
    }
`;

const Subtitle = styled.h4`
 font: ${font.SubtitleFontMobile};

    @media only screen and (min-width: 1024px) {
      width:40%;
  }

  .videoRating__rate {
        display:flex;
        align-items: center; 
    }
`;

const Star = styled.div`
    background: url("star_white.svg") no-repeat center;
    width: 24px;
    height: 24px;
    transition: background-image 0.3s ease; 
    &:hover {
        background: url("star.svg") no-repeat center;
        transition: background-image 0.3s ease; 
    }
`;

const StyledImage = styled.div`
    display: flex;
     flex-direction: row-reverse;
     justify-content:flex-end;
     cursor: pointer;

    .videoRating__icon:hover ~ .videoRating__icon, .videoRating__icon:hover {
        background: url("star.svg") no-repeat center;

    transition: background-image 0.3s ease; 
    }
`;

class VideoRateComponent extends React.Component<any>{

    render() {
        let stars = [];

        for (let i = 0; i < 5; i++) {
            const classNameIcon = 'videoRating__icon';

            stars.push(
                <Star className={classNameIcon}>
                </Star>
            )
        }

        return (
            <StyledRate className="videoDescribe__myRate">
                <Subtitle>Moja ocena</Subtitle>
                <StyledImage>
                    {stars}
                </StyledImage>
            </StyledRate>
        )
    }
}

export default VideoRateComponent;