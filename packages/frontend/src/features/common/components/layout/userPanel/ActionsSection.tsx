import * as React from 'react';
import styled from 'styled-components';

import GoToBtn from "./GoToBtn"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    height: 100%;
    width: 100%;
`


const ActionsSection: React.SFC = () => {
    return (
        <Wrapper>
            <GoToBtn text="Edytuj profil"></GoToBtn>
            <GoToBtn text="Abonament i Faktury"></GoToBtn>
            <GoToBtn text="Obejrzane Filmy"></GoToBtn>
            <GoToBtn text="Admin panel"></GoToBtn>
        </Wrapper>);
}

export default ActionsSection;