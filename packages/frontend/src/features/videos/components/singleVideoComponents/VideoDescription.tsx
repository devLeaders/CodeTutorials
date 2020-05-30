import * as React from 'react';
import styled from "styled-components"

import TitleAndAuthor from "./TitleAndAuthor";
import Description from "./Description"
import TechCell from "./TechCell"
import {Device} from "../../../common/styles/constans/Device"

const Wrapper = styled.div`
    width: 100%;
    padding: 12px 11px;
    display: flex;
    flex-wrap: wrap;
    @media ${Device.tablet} {
        /* padding: 40px 22px; */
    }
    @media ${Device.laptop} {
        /* padding: 56px 22px; */
    }
`;

const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe quis pariatur blanditiis sapiente unde voluptas ullam, repellendus non est consequuntur enim, debitis aliquid labore facilis qui vel laborum magni."

const technologies = ["Docker", "DevOps", "Aws"]
 
const VideoDescription: React.SFC = () => {
    return ( 
        <Wrapper>
            <TitleAndAuthor title="Doker od podstaw" author="Przemysław Bykowski"/>
            <Description desc={desc}/>
            {technologies.map((technology: string) => <TechCell key={technology} technology={technology}/>)}
        </Wrapper>
     );
}
 
export default VideoDescription;