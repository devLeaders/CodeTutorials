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


    private handleResize = () => {
        const {gsapMovies, videoWrapperRef} = this.props;
        const margin = calcMargins(gsapMovies[0].offsetWidth, videoWrapperRef.current.offsetWidth)
        this.setState({margin})
        TweenLite.to(gsapMovies, 0, {
            x: 0,
            ease: Power3.easeOut
        });
    }

    private animate = (elements: any, move: number, time: number) => {
        TweenLite.to(elements, time, {
            x: "+=" + move,
            ease: Power3.easeOut
          });
          this.setState((prevState: SlideState) =>  {return {videoPosition: prevState.videoPosition + move}} )
    }
    
   

    protected handleMove = (e: any) => {
        const {gsapMovies, videoWrapperRef} = this.props;
        const {margin, videoPosition} = this.state;
        const containerWidth = videoWrapperRef.current.offsetWidth;
        const videoWidth = gsapMovies[0].offsetWidth;
        const {lastMove, end, move, additionalVideosNum} = handleCalculations(videoWidth,containerWidth, gsapMovies.length, margin)
        let x = e.target.name === Directions.RIGHT ? move : -move
        

        if(videoPosition >= 0 && e.target.name === Directions.RIGHT){
                x = end
        }else if (videoPosition <= end && e.target.name === Directions.LEFT){
                x = -end
        }else if(videoPosition === -lastMove && e.target.name === Directions.RIGHT && additionalVideosNum !== 0){
                x= lastMove
        }
        else if (videoPosition === end + lastMove && e.target.name === Directions.LEFT && additionalVideosNum !== 0) {
                x =  - lastMove
        }
        
        let time = Math.abs(x) === Math.abs(end) ? 0.8 : 0.6
        this.animate(gsapMovies, x, time)
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