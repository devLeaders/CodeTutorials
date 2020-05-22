import React from 'react';
import styled from 'styled-components';
import { getMovie } from "../action/movieArray";
import { useEffect, useState } from "react";
import { RouteComponentProps } from 'react-router-dom';
import {Colors} from '../../common/styles/constans/Colors';
import { Device } from '../../common/styles/constans/Device';


const StyledVideoComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  background-color: ${Colors.nWhite};

  @media ${Device.LAPTOP} {
      flex-direction: row;
  }
`;

interface SingleMovieProps {
    id: string,
}

const SingleMoviePage: React.FC<RouteComponentProps<SingleMovieProps>> = (props) => {
    const [movie, setMovieArray] = useState({
        id: 0,
        name: "",
        rate: 0,
        hashtag: [""],
        level: "",
        date: "",
        describe: ""
    });
    useEffect(() => {
        setMovieArray(getMovie(props.match.params.id));
    }, [props.match.params.id]);

    return (
        <>
            <StyledVideoComponent >
                
            </StyledVideoComponent >
        </>
    )
}

export default SingleMoviePage;