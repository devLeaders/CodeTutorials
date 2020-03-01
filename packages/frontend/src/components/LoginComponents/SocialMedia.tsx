import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/colors';
import { fontFamily } from '../../utils/fontFamily';
import { fontSize } from '../../utils/fontSize';

const Wrapper = styled.div`
 
 display:flex;
 justify-content: center;
`;

const IconFb = styled.div`
    width: 50px;
    height: 50px;
    background: url('facebook.svg');
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    box-shadow: 0px 3px 17px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin-right: 20px;
`;

const IconTwitter = styled.div`
    width: 50px;
    height: 50px;
    background: url('twitter.svg');
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    box-shadow: 0px 3px 17px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin-right: 20px;
`;

const IconInsta = styled.div`
    width: 50px;
    height: 50px;
    background: url('instagram.svg');
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    box-shadow: 0px 3px 17px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
`;

const SocialMedia: React.FC = (props: any) => {

    return (
        <Wrapper>
            <IconFb></IconFb>
            <IconTwitter></IconTwitter>
            <IconInsta></IconInsta>
        </Wrapper>
    )
}

export default SocialMedia;