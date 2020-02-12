import React, { Component } from 'react'
import styled from 'styled-components';
import { font } from '../../utils/font';
import { colors } from '../../utils/colors';

const StyledRate = styled.section`
    width:100%;
    color: ${colors.colorMainFont};
    text-align: left;
    font-family: 'Roboto';

    @media only screen and (min-width: 1024px) {
      width:40%;
  }

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

const Star = styled.img`
    background: url("star.svg") no-repeat center;
    width: 18px;
    height: 18px;
`;

class VideoRateComponent extends React.Component<any>{

    render() {
        let stars = [];

        for (let i = 0; i < 5; i++) {
            const classNameIcon = 'videoRating__icon';

            stars.push(
                <Star
                    className={classNameIcon}
                // src="star.svg"
                >
                </Star>
            )
        }

        return (

            <StyledRate className="videoDescribe__myRate">
                <Subtitle>Moja ocena</Subtitle>


                {stars}

            </StyledRate>
        )
    }
}

export default VideoRateComponent;