import React from 'react';
import { 
    View,
    Button,
    Text,
    TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import {Color} from '../../../../features/common/styles/constans/Color';
import { FontSize } from '../../../../features/common/styles/constans/FontSize';
import { FontFamily } from '../../../../features/common/styles/constans/FontFamily';
import { BackButton, BackArrowImage } from './SingleMovieStyle2';
import { ButtonFilter, TextButtonActive } from '../Movies/MovieListStyle';
import { HeaderLeft } from './HeaderLeft';
import { NavigationName } from '../../../../config/routing/NavigationName';

const Wrapper = styled.View`
    background-color: ${Color.LIGHTGREY};
`;

const Title = styled.Text`
    margin-left: 14px;
    margin-right: 16px;
    font-weight: bold;
    font-size: ${FontSize.MIDIUM};
    color: ${Color.DARKGREY};
    line-height: 19px;
    
    
`;
const Autor = styled.Text`
    font-size: ${FontSize.SMALLX};
    color: ${Color.DARKGREY};
    line-height: 15px;
    margin-left: 14px;
    margin-right: 16px;
`;
const Description = styled.Text`
    font-size: ${FontSize.NORMAL};
    color: ${Color.DARKGREY};
    line-height: 18px;
    margin-top: 12px;
    margin-bottom: 30px;
    margin-left: 14px;
    margin-right: 16px;
`;

const ButtonWrapper = styled.View`
    margin-left: 14px;
    margin-right: 16px;
    display: flex;
    flex-direction: row;
`;

const DescriptionButton = styled.TouchableOpacity({
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: Color.WHITE,
    height: 17,
    shadowColor: "#00000029",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: "0.25",
    shadowRadius: 3.84,
    elevation: "5",
});

const ButtonText = styled.Text`
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 12px;
    padding-right: 11px;
    font-size: ${FontSize.SMALLS};
    font-weight: bold;
    color: ${Color.DARKGREY};
`;
const Separator = styled.View`
    width: 8px;
`;
const InquirySign = styled.Text`
    font-family: Montserrat;
    font-size: 105px;
    color: ${Color.DARKGREY};
    opacity: 0.4;
`;

interface MainDescriptionProps {
    title: string,
    autor: string,
    description: string,
    navigation: any,
}

export default class MainDescription extends React.Component<MainDescriptionProps> { 
    render() {
        return (
            <Wrapper> 
                <Title>{this.props.title}</Title>
                <Autor>{this.props.autor}</Autor>
                <Description>{this.props.description}</Description>
                <ButtonWrapper>
                    <DescriptionButton>
                        <ButtonText onPress={() => this.props.navigation.navigate(NavigationName.HOME)}>Docker</ButtonText>
                    </DescriptionButton>
                    <Separator />
                    <DescriptionButton>
                        <ButtonText onPress={() => this.props.navigation.navigate(NavigationName.HOME)}>DevOps</ButtonText>
                    </DescriptionButton>
                    <InquirySign>?</InquirySign>
                </ButtonWrapper>
            </Wrapper>
        );
    }
}

