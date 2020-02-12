import React, { Component } from 'react'
import VideoDescribeComponent from '../SingleVideoComponents/VideoDescribeComponent'
import VideoPlayerComponent from '../SingleVideoComponents/VideoPlayerComponent'

class VideoComponent extends React.Component<any>{

    render() {
        return <>
            <VideoDescribeComponent></VideoDescribeComponent>
            <VideoPlayerComponent></VideoPlayerComponent>
        </>
    }
}

export default VideoComponent;