import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { fontFamily } from '../../utils/fontFamily';
import { fontSize } from '../../utils/fontSize';

const Wrapper = styled.div`
 
 display:flex;
 justify-content: center;
`;

interface ImageProps {
    imageIcon: string
}

const Icon = styled.div`
    width: 50px;
    height: 50px;
    background: url('${(props: ImageProps) => props.imageIcon}');
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    box-shadow: 0px 3px 17px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin-right: 20px;
    &:hover {
        transition: all 0.3s ease 0s;
        box-shadow: 0px 3px 17px rgba(0, 0, 0, 0.3);
    }
`;

const SocialMedia: React.FC = (props) => {

    return (
        <Wrapper>
            <Icon imageIcon="facebook.svg"></Icon>
            <Icon imageIcon="twitter.svg"></Icon>
            <Icon imageIcon="instagram.svg"></Icon>
        </Wrapper>
    )
}

export default SocialMedia;