import React from 'react';
import { 
    View,
    Button,
    Text,
    TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import {Color} from '../../../../features/common/styles/constans/Color';
import { FontSize } from '../../../../features/common/styles/constans/FontSize';
import { FontFamily } from '../../../../features/common/styles/constans/FontFamily';
import { NavigationName } from '../../../../config/routing/NavigationName';
import { FontWeight } from '../../../../features/common/styles/constans/FontWeight';
import { MyText } from '../../../../features/common/styles/MyText';

const Wrapper = styled.View`
    background-color: ${Color.LIGHTGREY};
    margin-top: 29px
`;

const Title = styled(MyText)({
    marginLeft: 14,
    marginRight: 16,
    fontWeight: parseInt(FontWeight.BOLD, 10),
    fontSize: FontSize.MIDIUM,
    color: Color.DARKGREY
});

const Autor = styled(MyText)({
    fontWeight: parseInt(FontWeight.REGULAR, 10),
    fontSize: FontSize.SMALLX,
    color: Color.DARKGREY,
    marginLeft: 14,
    marginRight: 16
});
const Description = styled(MyText)({
    fontSize: FontSize.NORMAL,
    color: Color.DARKGREY,
    fontWeight: parseInt(FontWeight.REGULAR, 10),
    marginTop: 12,
    marginBottom: 30,
    marginLeft: 14,
    marginRight: 16
});

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
    shadowColor: Color.LIGHTGREYX,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: "0.25",
    shadowRadius: 3.84,
    elevation: "5",
});

const ButtonText = styled(MyText)({
    paddingLeft: 12,
    paddingRight: 11,
    fontSize: FontSize.SMALLS,
    fontWeight: parseInt(FontWeight.SEMIBOLD, 10),
    color: Color.BLACK
});

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

    public NavToHome = () =>{this.props.navigation.navigate(NavigationName.HOME)}

    render() {
        return (
            <Wrapper> 
                <Title>{this.props.title}</Title>
                <Autor>{this.props.autor}</Autor>
                <Description>{this.props.description}</Description>
                <ButtonWrapper>
                    <DescriptionButton>
                        <ButtonText onPress={this.NavToHome}>Docker</ButtonText>
                    </DescriptionButton>
                    <Separator />
                    <DescriptionButton>
                        <ButtonText onPress={this.NavToHome}>DevOps</ButtonText>
                    </DescriptionButton>
                </ButtonWrapper>
            </Wrapper>
        );
    }
}

