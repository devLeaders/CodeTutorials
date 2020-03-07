import React, { Component } from 'react'
import styled from 'styled-components';
import { fontFamily } from '../../utils/fontFamily';
import { fontSize } from '../../utils/fontSize';
import { fontWeight } from '../../utils/fontWeight';
import { image } from '../../utils/image'
import { colors } from '../../utils/colors';
import { breakPoint } from '../../utils/breakPoint'
import { getMovie } from "../../utils/movieArray";
import { useEffect, useState } from "react";

const Header = styled.header`
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
`;

const Title = styled.h1`
        font-family: ${fontFamily.openSansFont};
        font-size: ${fontSize.headerMobile};
        font-weight: ${fontWeight.black};
        color: ${colors.colorMainFont};
        @media screen and (min-width: ${breakPoint.desktop}) {
            font-size: ${fontSize.headerDesktop};
        }
`;

const VideoRating = styled.div`
        line-height:40px;
        padding-right: 15px;
        display: flex;
        align-content: center;
`;

const VideoRatingValue = styled.div`
        font-family: ${fontFamily.openSansFont};
        font-size: ${fontSize.subtitleMobile};
        font-weight: ${fontWeight.black};
        line-height:40px;
        padding-left: 10px;
        display: flex;
        align-content: center;
        color: ${colors.colorMainFont};
        @media screen and (min-width: ${breakPoint.desktop}) {
            font-size: ${fontSize.subtitleDesktop};
        }
`;

interface VideoHeaderProps {
    name: string,
    rate: number,
}

function VideoHeaderComponent(props: VideoHeaderProps) {
    const { name, rate } = props;

    return (
        <Header>
            <Title>{name}</Title>
            <VideoRating>

                <img src='/star.svg' className="videoRating__icon"></img>
                <VideoRatingValue className="videoRating__value">{rate}</VideoRatingValue>
            </VideoRating>
        </Header>
    )
}

export default VideoHeaderComponent;