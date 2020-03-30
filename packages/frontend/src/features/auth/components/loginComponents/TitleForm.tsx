import React from 'react';
import styled from 'styled-components';
import { FontFamily } from '../../../common/styles/constans/FontFamily';
import { FontSize } from '../../../common/styles/constans/FontSize';
import { fontWeight } from '../../../common/styles/constans/fontWeight';
import Colors from '../../../common/styles/constans/Colors';


const Title = styled.h1`
    width: 100%;
    color: ${Colors.nBlack};
    font-family: ${FontFamily.openSansFont};
    font-size: ${FontSize.headerMobile};
    font-weight: ${fontWeight.medium};
    text-align: left;
    padding-bottom: 50px;
`;

const TitleForm: React.FC = (props: any) => {

    return (
        <Title>Logowanie</Title>
    )
}

export default TitleForm;