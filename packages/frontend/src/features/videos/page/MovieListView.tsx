import * as React from "react";
import {useRef, useEffect} from 'react';
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
justify-content:space-between;
position:fixed;
top:0;
`
const MovieListConstainer = styled.div`
height:700px;
display:flex;
flex-wrap:wrap;
margin:0 auto;
@media ${Device.LAPTOP} {
   margin-right:475px;
  }
`
const MainSectionWrapper = styled.div`
display:flex;
`

const moviesList = ['1','2','3','4','5','6','7','8','9','10','11',]

export interface MovieListViewProps {containerWidth:number}

const MovieListView: React.FC<MovieListViewProps>= () => {
    let movieListContainer = useRef<any>(null)
    let movieItem = useRef<any>(null)
    useEffect(() => {   
        handleContainerMargin(movieListContainer.current?.offsetWidth, movieItem.current?.offsetWidth);
        handleResize()
    }, [])
    const handleResize = () => {
        window.addEventListener("resize", () => {
            handleContainerMargin(movieListContainer.current?.offsetWidth, movieItem.current?.offsetWidth);
        });
    }

    const handleContainerMargin = (container:number, item:number) => {
        const MovieListArray =  Array.from(movieListContainer.current.children)
        
        if(container / item > 3) {
            let sidesMargin = (container - item*3)/4
            movieListContainer.current.style.padding = `38px ${sidesMargin}px`
            MovieListArray.map((item:any) => {
                item.style.margin = `0 ${sidesMargin/3}px 49px`
            })
        } else if ( container / item > 2) {
            let sidesMargin = (container - item*2)/4
            movieListContainer.current.style.padding = `38px ${sidesMargin}px`
            MovieListArray.map((item:any) => {
                item.style.margin = `0 ${sidesMargin/3}px 49px`
            })
        }else if ( container / item > 1) {
            console.log(container / item > 1)
            let sidesMargin = (container - item)
            movieListContainer.current.style.padding = `38px ${sidesMargin/6}px`
            MovieListArray.map((item:any) => {
                item.style.margin = `0 ${sidesMargin/4}px 49px`
            })
        }
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
                </MovieListConstainer>
                <Filters/>
            </MainSectionWrapper>
           
        </Wrapper>
    )
  }

export default MovieListView;