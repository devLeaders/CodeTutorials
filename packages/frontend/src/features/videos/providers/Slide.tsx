import * as React from 'react';
import { TweenLite, Power3 } from "gsap";

import {Directions} from "../components/movieList/SliderBtns"
import {handleCalculations, calcMargins} from "../action/SliderCalcService"

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

    private calcMargins = () => {
        const {gsapMovies, videoWrapperRef} = this.props;
        const wrapperWidth = videoWrapperRef.current.offsetWidth
        const elementWidth = gsapMovies[0].offsetWidth
        const minMargin = 15;
        const elementsOnScreen = Math.floor(wrapperWidth/ (elementWidth + (minMargin * 2)));
        const freeSpace = wrapperWidth- (elementWidth * elementsOnScreen)
        const margin = (freeSpace) / (elementsOnScreen + 1)
        this.setState({margin})
    }

    private handleResize = () => {
        const {gsapMovies, videoWrapperRef} = this.props;
        const margin = calcMargins(gsapMovies[0].offsetWidth, videoWrapperRef.current.offsetWidth)
        this.setState({margin})
        TweenLite.to(gsapMovies, 0.4, {
            x: 0,
            ease: Power3.easeOut
        });
    }

    private animate = (elements: any, move: number, pace: number) => {
        TweenLite.to(elements, pace, {
            x: "+=" + move,
            ease: Power3.easeOut
          });
          this.setState((prevState: any) =>  {return {videoPosition: prevState.videoPosition + move}} )
    }
    
   

    protected handleMove = (e: any) => {
        const {gsapMovies, videoWrapperRef} = this.props;
        const {margin, videoPosition} = this.state;
        const containerWidth = videoWrapperRef.current.offsetWidth;
        const videoWidth = gsapMovies[0].offsetWidth;
        const {lastMove, end, move, additionalVideosNum} = handleCalculations(videoWidth,containerWidth, gsapMovies.length, margin)
        

        if(videoPosition >= 0 && e.target.name === Directions.RIGHT){
                this.animate(gsapMovies, end, 0.8)
        }else if (videoPosition === end && e.target.name === Directions.LEFT){
                TweenLite.to(gsapMovies, 0.8, {
                    x: 0,
                    ease: Power3.easeOut
                });
                this.setState({videoPosition: 0})
        }else if(videoPosition === -lastMove && e.target.name === Directions.RIGHT && additionalVideosNum !== 0){
                this.animate(gsapMovies, lastMove, 0.4)
        }
        else if (videoPosition <= end + lastMove && e.target.name === Directions.LEFT && additionalVideosNum !== 0) {
                this.animate(gsapMovies, - lastMove, 0.4)
        }else{
            const x = e.target.name === Directions.RIGHT ? move : -move;
            this.animate(gsapMovies, x, 0.4)
        }
    }


    componentDidMount() {
        const {gsapMovies, videoWrapperRef} = this.props;
        window.addEventListener("resize", this.handleResize);
        const margin = calcMargins(gsapMovies[0].offsetWidth, videoWrapperRef.current.offsetWidth)
        this.setState({margin})
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