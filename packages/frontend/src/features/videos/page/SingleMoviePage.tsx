import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import {Colors} from '../../common/styles/constans/Colors';
import { Device } from '../../common/styles/constans/Device';
import VideoPlayerComponent from "../../videoPlayer/VideoPlayerComponent"



interface SingleMovieProps {
    id: string,
}

const SingleMoviePage: React.FC<RouteComponentProps<SingleMovieProps>> = (props) => {

    return (
        <VideoPlayerComponent/>
    )
}

export default SingleMoviePage;