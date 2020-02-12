import React, { Component } from 'react'
import styled from 'styled-components';
import VideoRateComponent from '../SingleVideoComponents/VideoRateComponent'
import VideoHeaderComponent from '../SingleVideoComponents/VideoHeaderComponent'
import VideoInfoComponent from '../SingleVideoComponents/VideoInfoComponent'

const DescribeContainer = styled.div`
    width:100%;
    text-align: left;
    padding: 15px;
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 1024px) {
      width:40%;
  }
`;

class VideoDescribeComponent extends React.Component<any>{

    render() {
        return (

            <DescribeContainer>
                <VideoHeaderComponent></VideoHeaderComponent>
                <VideoRateComponent></VideoRateComponent>
                <VideoInfoComponent></VideoInfoComponent>
            </DescribeContainer>
        )
    }
}

export default VideoDescribeComponent;