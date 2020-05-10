import * as React from 'react';
import { TweenLite, Power3 } from "gsap";

import {Directions} from "../components/movieList/SliderBtns"

export interface SlideProps {
    videoWrapperRef: any;
    gsapMovies: any;
    render:any;
}
 
export interface SlideState {
    videoPosition: number;
    margin: number,
}
 
class Slide extends React.Component<SlideProps, SlideState> {
    state = { 
        videoPosition: 0,
        margin: 0,
    }

    private calcElementsOnScreen = () => {
        const {gsapMovies, videoWrapperRef} = this.props;
        const minMargin = 15;
        const elementsOnScreen = Math.floor(videoWrapperRef.current.offsetWidth/ (gsapMovies[0].offsetWidth + (minMargin * 2)));
        return elementsOnScreen
    }

    private calcMargins = () => {
        const {gsapMovies, videoWrapperRef} = this.props;
        const elementsOnScreen = this.calcElementsOnScreen()
        const freeSpace = videoWrapperRef.current.offsetWidth - (gsapMovies[0].offsetWidth * elementsOnScreen)
        const margin = (freeSpace) / (elementsOnScreen + 1)
        this.setState({margin})
    }

    private handleResize = () => {
        const {gsapMovies} = this.props;
        this.calcMargins()
        TweenLite.to(gsapMovies, 0.4, {
            x: 0,
            ease: Power3.easeOut
          });
    }

    private animate = (elements: any, move: number) => {
        TweenLite.to(elements, 0.4, {
            x: "+=" + move,
            ease: Power3.easeOut
          });
    }
    
    private calcEndWidth = (elements: Array<any>, elementsOnScreen: number, additionalVideosNum: number, move: number) => {
        const numOfFullMoves = Math.abs(Math.ceil((elements.length / elementsOnScreen) - 1) * move)
        const endWidth =   additionalVideosNum !== 0 ? 
            // numOfFullMoves - move + (additionalVideosNum * elements[0].offsetWidth + this.state.margin) 
            numOfFullMoves - Math.abs(move) + (additionalVideosNum * elements[0].offsetWidth + this.state.margin) 
        : numOfFullMoves;
        return -endWidth
    }

    private calcLastMove = (videosNum: number, videoWidth:number, direction: string) => {
        return direction === Directions.LEFT ?
        videosNum * (videoWidth + this.state.margin) 
        :  videosNum * (videoWidth + this.state.margin);
    }


    handleMove = (e: any) => {
        const {gsapMovies, videoWrapperRef} = this.props;
        const {margin, videoPosition} = this.state;
        const containerWidth = videoWrapperRef.current.offsetWidth;
        const videoWidth = gsapMovies[0].offsetWidth;
        const move = e.target.name === Directions.LEFT ? 
        - (containerWidth - (margin)) 
        : (containerWidth- (margin));
        const elementsOnScreen = this.calcElementsOnScreen()
        const additionalVideosNum = gsapMovies.length % elementsOnScreen
        const endWidth = ((Math.ceil((gsapMovies.length / elementsOnScreen) - 1) * move));
        const end = this.calcEndWidth(gsapMovies, elementsOnScreen, additionalVideosNum, move)
        const lastMoveRight = this.calcLastMove(additionalVideosNum, videoWidth, e.target.LEFT)
        
        console.log(endWidth ,end, lastMoveRight)
        console.log(videoPosition)
       
        if(videoPosition === 0 && e.target.name === Directions.RIGHT){
            const x = additionalVideosNum !== 0 ? (end) : -endWidth
            this.animate(gsapMovies, x)
            this.setState({videoPosition: x})
        }else if(videoPosition === -lastMoveRight && e.target.name === Directions.RIGHT){
            this.animate(gsapMovies, lastMoveRight)
            this.setState((prevState: any) =>  {return {videoPosition: prevState.videoPosition + lastMoveRight}} )
        }else if (videoPosition === endWidth - move && e.target.name === Directions.LEFT && additionalVideosNum !== 0) {
            const lastMoveLeft = this.calcLastMove(additionalVideosNum, gsapMovies[0].offsetWidth, e.target.name)
            this.animate(gsapMovies, - lastMoveLeft)
            this.setState((prevState: any) =>  {return {videoPosition: prevState.videoPosition - lastMoveLeft}} )
        }else if(videoPosition === end && e.target.name === Directions.LEFT){
            this.animate(gsapMovies, -end)
            this.setState({videoPosition: 0})
        }else {
            this.animate(gsapMovies, move)
            this.setState((prevState: any) =>  {return {videoPosition: prevState.videoPosition + move}} )
        }
    }


    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        this.calcMargins()
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }


    render() { 
        const renderProps = {
            handleMove: this.handleMove,
            margin: this.state.margin
        }
        
        return this.props.render(renderProps);
    }
}
 
export default Slide;