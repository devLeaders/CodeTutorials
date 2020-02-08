import React from 'react';
import VideoComponent from '../components/VideoComponent'
import styled from 'styled-components';

const StyledVideoComponent = styled.section`
  width: 100%;
  display:flex;
  background-color: black;
`;

const SingleMoviePage: React.FC = (props: any) => {

    return (
        <div className='singleMovie__Container'>
            {/* <NavigationComponent></NavigationComponent> */}
            <StyledVideoComponent>
                {<VideoComponent></VideoComponent>}
            </StyledVideoComponent>
        </div>
    )
}

export default SingleMoviePage;