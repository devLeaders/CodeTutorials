import * as React from "react";
import {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import VideoItem from '../components/movieList/VideoItem'
import BannerContainer from '../../common/components/layout/banner/BannerContainer'
import NavBarContainer from '../../common/components/layout/navBar/NavBarContainer'
import Filters from '../../filters/components/Filters'
import {Device} from '../../common/styles/constans/Device'

const Wrapper = styled.div`
display:flex;
flex-direction:column;
padding-top:110px;
`
const HeaderWrapper = styled.div`
display:flex;
flex-direction:row;
width:100%;
justify-content:space-between;
position:fixed;
top:0;
`
const MovieListConstainer = styled.div`
padding-top:38px;
height:700px;
display:flex;
flex-wrap:wrap;
margin:0 auto;
/* justify-content: space-around; */
@media ${Device.LAPTOP} {
   margin-right:475px;
  }
`
const MainSectionWrapper = styled.div`
display:flex;
align-content:center;
margin:0 auto;
`


const moviesList = ['1','2','3','4','5','6','7','8','9','10','11',]

export interface MovieListViewProps {containerWidth:number}

const MovieListView: React.ForwardRefExoticComponent<MovieListViewProps>= React.forwardRef(() => {
    let movieListContainer = useRef<HTMLDivElement>(null)
    let movieItem = useRef(null)
    const [containerWidth, setContainerWidth] = useState<number | null>()
    useEffect(() => {
        setContainerWidth(movieListContainer.current?.offsetWidth)
        if(movieItem !== null) {
        console.log(movieItem, 'not null')
        
     
        } else {
            console.log(movieListContainer, 'null')
        }
    }, [])
   

    return(
        <Wrapper>
            <HeaderWrapper>
                <BannerContainer/>
                <NavBarContainer/>
            </HeaderWrapper>
            <MainSectionWrapper>
                <MovieListConstainer ref={movieListContainer}>
                    {moviesList.map((item) => (
                    <VideoItem key={item} movieItem={movieItem}/>
                    ))}
                </MovieListConstainer>
                <Filters/>
            </MainSectionWrapper>
           
        </Wrapper>
    )
  }
)
export default MovieListView;