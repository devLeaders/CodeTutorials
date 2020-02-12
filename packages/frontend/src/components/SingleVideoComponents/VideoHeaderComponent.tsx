import React, { Component } from 'react'
import styled from 'styled-components';
import { font } from '../../utils/font'
import { image } from '../../utils/image'
import { colors } from '../../utils/colors';

const Header = styled.header`
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
`;

const Title = styled.h1`
        font: ${font.HeaderFontMobile};
        color: ${colors.colorMainFont};
        @media only screen and (min-width: 1024px) {
            font: ${font.HeaderFontDesktop};
        }
`;

const VideoRating = styled.div`
        font: ${font.SubtitleFontMobile};
        line-height:40px;
        padding-right: 15px;
        display: flex;
        align-content: center;
        @media only screen and (min-width: 1024px) {
            font: ${font.SubtitleFontDesktop};
        }
`;

const VideoRatingValue = styled.div`
        font: ${font.SubtitleFontMobile};
        line-height:40px;
        padding-left: 10px;
        display: flex;
        align-content: center;
        color: ${colors.colorMainFont};
        @media only screen and (min-width: 1024px) {
            font: ${font.SubtitleFontDesktop};
        }
`;

class VideoHeaderComponent extends React.Component<any>{

    render() {
        return (
            <Header>
                <Title>Tytuł filmu</Title>
                <VideoRating>

                    <img src='star.svg' className="videoRating__icon"></img>

                    <VideoRatingValue className="videoRating__value">8,7</VideoRatingValue>
                </VideoRating>
            </Header>
        )
    }
}

export default VideoHeaderComponent;