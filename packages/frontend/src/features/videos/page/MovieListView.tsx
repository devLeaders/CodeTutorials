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
z-index:2;
display:flex;
flex-direction:row;
width:100%;
justify-content:space-around;
position:fixed;
top:0;
`
const MovieListConstainer = styled.div`
margin-top: 38px;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
@media ${Device.LAPTOP} {
   margin-right:475px;
  }
`
const MainSectionWrapper = styled.div`
display:flex;
`
const InvisibleMovie = styled.div`
width:${(props: {width:any}) => `${props.width}px`};
`

const moviesList = ['1','2','3','4','5','6','7','8','9','10','11']

export interface MovieListViewProps {containerWidth:number}

const MovieListView: React.FC<MovieListViewProps>= () => {
    let movieListContainer = useRef<any>(null)
    const movieItem = useRef<any>(null)

    const [fillerItems, setFillerItems] = useState<Array<number>>()
    useEffect(() => {   
        handleLastRowFill(movieListContainer.current?.offsetWidth, movieItem.current?.offsetWidth);
        window.addEventListener("resize", () => handleLastRowFill(movieListContainer.current?.offsetWidth, movieItem.current?.offsetWidth));

        return  window.removeEventListener("resize", () => handleLastRowFill(movieListContainer.current?.offsetWidth, movieItem.current?.offsetWidth)); 
    }, [])
    const handleLastRowFill = (container:number, item:number) => {  
            const ItemsInRow = Math.floor(container/item)
            const ItemsNeededInRow =  ItemsInRow - (moviesList.length % ItemsInRow);
            const FillerItems = new Array(ItemsNeededInRow).fill(undefined).map((val,idx) => idx);
            setFillerItems(FillerItems);
    } 
    return(
        <Wrapper>
            <HeaderWrapper>
                <BannerContainer/>
                <NavBarContainer/>
            </HeaderWrapper>
            <MainSectionWrapper>
                <MovieListConstainer ref={movieListContainer}>
                    {moviesList.map((item) => (
                    <VideoItem key={item} ref={movieItem}/>
                    ))}
                    {fillerItems && fillerItems.map((item:any) => (
                    <InvisibleMovie key={item} width={movieItem.current?.offsetWidth}/>
                ))}
                </MovieListConstainer>
               <Filters/>
            </MainSectionWrapper>
           
        </Wrapper>
    )
  }

export default MovieListView;