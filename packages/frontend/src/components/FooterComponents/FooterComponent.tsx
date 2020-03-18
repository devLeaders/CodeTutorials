import React from 'react'
import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { breakPoint } from '../../utils/breakPoint';

const StyledFooter = styled.ul`
box-sizing: border-box;
    max-width: 100%;
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    border-top: 2px solid ${colors.colorBorder};
    margin: 50px 15px 0px 15px;
    padding-top: 20px;
    flex-wrap: wrap;
    
    @media screen and (min-width: ${breakPoint.desktop}) {
        flex-direction: row;
        width: 100%;
        margin: 50px auto 0 auto;
    }
  `;

const FooterElement = styled.li`
    padding: 10px 20px;
  `;

class FooterComponent extends React.Component<any>{

    render() {
        return <StyledFooter>
            <FooterElement>Pomoc</FooterElement>
            <FooterElement>Regulamin</FooterElement>
            <FooterElement>Kontakt</FooterElement>
            <FooterElement>Jak to działa</FooterElement>
        </StyledFooter>
    }
}

export default FooterComponent;