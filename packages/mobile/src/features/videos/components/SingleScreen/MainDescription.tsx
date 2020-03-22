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
import { NavigationName } from '../../../../config/routing/NavigationName';
import { FontWeight } from '../../../../features/common/styles/constans/FontWeight';

const Wrapper = styled.View`
    background-color: ${Color.LIGHTGREY};
`;

const Title = styled.Text`
    margin-left: 14px;
    margin-right: 16px;
    font-weight: ${FontWeight.BOLD};
    font-family: ${FontFamily.GLOBAL_MONT};
    font-size: ${FontSize.MIDIUM};
    color: ${Color.DARKGREY};
    line-height: 19px;
`;
const Autor = styled.Text`
    font-family: ${FontFamily.GLOBAL_MONT};
    font-size: ${FontSize.SMALLX};
    color: ${Color.DARKGREY};
    line-height: 13px;
    margin-left: 14px;
    margin-right: 16px;
`;
const Description = styled.Text`
    font-family: ${FontFamily.GLOBAL_MONT};
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
    //height: 17 px;     ??
    shadowColor: Color.LIGHTGREYX,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: "0.25",
    shadowRadius: 3.84,
    elevation: "5",
});

const ButtonText = styled.Text`
    font-family: ${FontFamily.GLOBAL_MONT};
    line-height: 22px;
    padding-left: 12px;
    padding-right: 11px;
    font-size: ${FontSize.SMALLS};
    font-weight: ${FontWeight.SEMIBOLD};
    color: ${Color.BLACK};
`;
const Separator = styled.View`
    width: 8px;
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
                </ButtonWrapper>
            </Wrapper>
        );
    }
}

