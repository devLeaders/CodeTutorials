import React from 'react'
import styled from 'styled-components';
import { breakPoint } from '../../utils/breakPoint'

const StyledVideo = styled.video`
  width: 100%;

  @media screen and (min-width: ${breakPoint.desktop}) {
      flex-direction: row;
      width:60%;
  }
`;

class VideoPlayerComponent extends React.Component<any>{

    render() {
        return (
            <StyledVideo controls>
                <source src="video.mp4" type="video/mp4"></source>
            </StyledVideo>
        )
    }
}

export default VideoPlayerComponent;