import React, { Component } from 'react'
import styled from 'styled-components';
import VideoDescribeComponent from '../components/VideoDescribeComponent'

import VideoPlayerComponent from '../components/VideoPlayerComponent'

const StyledVideoComponent = styled.div`
  border: 2px solid violet;
`;
const StyledVideoPlayerComponent = styled.div`
  width: 100vw;
  border: 2px solid yellow;
`;

class VideoComponent extends React.Component<any>{

    render() {
        return (
            <>
                <VideoDescribeComponent></VideoDescribeComponent>
                <VideoPlayerComponent></VideoPlayerComponent>
            </>

        )
    }
}

export default VideoComponent;