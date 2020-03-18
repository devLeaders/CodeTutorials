import React from 'react';
import styled from 'styled-components';
import { fontFamily } from '../../utils/fontFamily';
import { fontSize } from '../../utils/fontSize';
import { colors } from '../../utils/colors';
import { fontWeight } from '../../utils/fontWeight';


const Title = styled.h1`
    width: 100%;
    color: ${colors.colorTitle};
    font-family: ${fontFamily.openSansFont};
    font-size: ${fontSize.headerMobile};
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