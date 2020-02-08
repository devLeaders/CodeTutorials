import React, { Component } from 'react'
import styled from 'styled-components';

const StyledVideo = styled.div`
  width: 60%;
  video {
    width:100%;

  }
`;

class VideoPlayerComponent extends React.Component<any>{

    render() {
        return (
            <>  <StyledVideo>
                <video width="400" controls>
                    <source src="video.mp4" type="video/mp4"></source>
                </video>
            </StyledVideo>
            </>

        )
    }
}

export default VideoPlayerComponent;