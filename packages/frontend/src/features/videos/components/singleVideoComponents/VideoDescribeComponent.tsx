import React from 'react'
import styled from 'styled-components';
import VideoRateComponent from './VideoRateComponent'
import VideoHeaderComponent from './VideoHeaderComponent'
import VideoInfoComponent from './VideoInfoComponent'
import { Device } from '../../../common/styles/constans/Device';

const DescribeContainer = styled.div`
    width:100%;
    text-align: left;
    padding: 15px;
    display: flex;
    flex-direction: column;
    @media ${Device.DESKTOP} {
      width:40%;
  }
`;

interface VideoDescribeProps {
    name: string,
    rate: number,
}

class VideoDescribeComponent extends React.Component<VideoDescribeProps>{

    render() {
        const { name, rate } = this.props;
        return (

            <DescribeContainer>
                <VideoHeaderComponent name={name} rate={rate}></VideoHeaderComponent>
                <VideoRateComponent></VideoRateComponent>
                <VideoInfoComponent></VideoInfoComponent>
            </DescribeContainer>
        )
    }
}

export default VideoDescribeComponent;