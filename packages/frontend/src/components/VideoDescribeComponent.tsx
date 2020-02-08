import React, { Component } from 'react'
import styled from 'styled-components';

const StyledParagraph = styled.div`
    width:40%;
    color: white;
    text-align: left;
    font-family: 'Roboto';

    .videoDescribe__container {
        padding:15px;
        display: flex;
        flex-direction: column;
    }

    .videoDescribe__header {
        display: flex;
    }
    
    h1 {
        font-size: 2em;
        padding-right: 15px;
    }

    h3 {
        padding: 35px 0 15px 0;
        font-weight: 400;
    }

    h4 {
        padding: 35px 0 10px 0;
        font-weight:300;}

    .videoRating__rate {
        display:flex;
        align-items: center;
    } 

    p {
        font-weight:100;
    }
    img {
        cursor: pointer;
    }
`;

class VideoDescribeComponent extends React.Component<any>{

    state = {
        star: "star_white.svg",
    }

    render() {
        return (
            <>
                <StyledParagraph>
                    <div className='videoDescribe__container'>
                        <div className="videoDescribe__header">
                            <h1>Tytuł filmu</h1>
                            <div className="videoRating__rate">
                                <img src='star.svg' className="videoRating__icon"></img>
                                <span className="videoRating__value">8,7</span>
                            </div>
                        </div>

                        <div className="videoDescribe__myRate">
                            <h4>Moja ocena</h4>
                            <img
                                src={this.state.star}
                                onMouseEnter={() => { this.setState({ star: "star.svg" }) }}
                                onMouseOut={() => { this.setState({ star: "star_white.svg" }) }}
                                className="videoRating__icon"></img>
                            <img
                                src={this.state.star}
                                onMouseEnter={() => { this.setState({ star: "star.svg" }) }}
                                onMouseOut={() => { this.setState({ star: "star_white.svg" }) }}
                                className="videoRating__icon"></img>
                            <img
                                src={this.state.star}
                                onMouseEnter={() => { this.setState({ star: "star.svg" }) }}
                                onMouseOut={() => { this.setState({ star: "star_white.svg" }) }}
                                className="videoRating__icon"></img>
                            <img
                                src={this.state.star}
                                onMouseEnter={() => { this.setState({ star: "star.svg" }) }}
                                onMouseOut={() => { this.setState({ star: "star_white.svg" }) }}
                                className="videoRating__icon"></img>
                        </div>
                        <h3>Podtytuł</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt commodo dignissim. Suspendisse et nunc facilisis, lobortis dui sit amet, tempus orci. Nunc sodales dapibus augue sed venenatis. In hendrerit placerat odio vel ornare. Etiam pellentesque scelerisque tortor, ut venenatis nulla tincidunt sed. Sed quis dui lacinia, aliquet ex id, faucibus velit. </p>
                    </div>
                </StyledParagraph>
            </>
        )
    }
}

export default VideoDescribeComponent;