import * as React from "react";
import {useState} from 'react';
import styled from 'styled-components';
import VideoSearch from '../../common/components/layout/banner/VideoSearch'
import VideoItem from '../components/movieList/VideoItem'
import NavBarContainer from '../../common/components/layout/navBar/NavBarContainer'
import {Device} from '../../common/styles/constans/Device'
import {Colors} from '../../common/styles/constans/Colors'

const StyledPageWrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: 
    'Logo NavBar'
    'Movies Movies';
@media ${Device.tablet} {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: ${(props: {active:boolean}) => props.active ?`'Logo NavBar'
    'Movies NavBar'` : `'Logo NavBar' 'Movies Movies'` };
}
`
const StyledHeaderWrapper = styled.div`
 grid-area: NavBar;
/* background-color: ${Colors.VERY_LIGHT_GRAY}; */
display: flex;
flex-direction:row;
justify-content:flex-end;
margin-bottom: 60px;
@media ${Device.tablet} {
   
}
`
const StyledFilterButton = styled.button`
    grid-area:Logo;
    height:55px;
    padding:0px;
`

const VideoWrapper = styled.ul`
 grid-area: Movies;
display: flex;
flex-direction:row;
flex-wrap: wrap;
justify-content: space-evenly;
transition: transform .3s ease-in-out;
@media ${Device.tablet} {
   
    transform: ${(props: {active:boolean}) => props.active ? 'scale(0.8)' : 'scale()'}
}

`
const StyledListFiller = styled.li`
    display:block;
    flex-grow:10;
`

const moviesList = ['1','2','3','4','5']

export interface MovieListViewProps {}

const MovieListView: React.FC<MovieListViewProps>= () => {
const [filterIsOpen, setFilersisOpen] = useState(false)
const handleFilterOpen = React.useCallback(() => {
    setFilersisOpen(!filterIsOpen);
  }, [filterIsOpen]);

    return(
    <StyledPageWrapper active={filterIsOpen}> 
    <StyledFilterButton onClick={handleFilterOpen}>Bykowski</StyledFilterButton>
    <StyledHeaderWrapper>
        <VideoSearch/>
        <NavBarContainer filterIsOpen={filterIsOpen}/>
    </StyledHeaderWrapper>
       
        <VideoWrapper active={filterIsOpen}>
            {moviesList.map((movie)=> (
                <VideoItem key={movie}/>
            ))}
          <StyledListFiller/>
        </VideoWrapper>
        
    </StyledPageWrapper>
    )
}
export default MovieListView;