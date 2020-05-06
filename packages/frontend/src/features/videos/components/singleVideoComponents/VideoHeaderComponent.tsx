import React from 'react'
import styled from 'styled-components';
import { FontFamily } from '../../../common/styles/constans/FontFamily';
import { fontWeight } from '../../../common/styles/constans/fontWeight';
import {Colors} from '../../../common/styles/constans/Colors';
import { Device } from '../../../common/styles/constans/Device';
import { FontSize } from '../../../common/styles/constans/FontSize';

const Header = styled.header`
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
`;

const Title = styled.h1`
        font-family: ${FontFamily.openSansFont};
        font-size: ${FontSize.headerMobile};
        font-weight: ${fontWeight.black};
        color: ${Colors.nBlack};
        ${Device.laptop} {
            font-size: ${FontSize.headerDesktop};
        }
`;

const VideoRating = styled.div`
        line-height:40px;
        padding-right: 15px;
        display: flex;
        align-content: center;
`;

const VideoRatingValue = styled.div`
        font-family: ${FontFamily.openSansFont};
        font-size: ${FontSize.subtitleMobile};
        font-weight: ${fontWeight.black};
        line-height:40px;
        padding-left: 10px;
        display: flex;
        align-content: center;
        color: ${Colors.nBlack};
        ${Device.laptop} {
            font-size: ${FontSize.subtitleDesktop};
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
                <img src='img/star.svg' className="videoRating__icon" alt=""></img>
                <VideoRatingValue className="videoRating__value">{rate}</VideoRatingValue>
            </VideoRating>
        </Header>
    )
}

export default VideoHeaderComponent;