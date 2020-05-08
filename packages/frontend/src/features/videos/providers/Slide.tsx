import * as React from 'react';
import { gsap, TweenLite, Power3 } from "gsap";

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


    handleMove = (e: any) => {
        const {gsapMovies, videoWrapperRef} = this.props;
        const move = e.target.name === Directions.LEFT ? - (videoWrapperRef.current.offsetWidth - (this.state.margin)) : (videoWrapperRef.current.offsetWidth - (this.state.margin));
        

        TweenLite.to(gsapMovies, 0.4, {
            x: "+=" + move,
            ease: Power3.easeOut
          });
    }

    componentDidMount() {
        this.calcMargins()
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