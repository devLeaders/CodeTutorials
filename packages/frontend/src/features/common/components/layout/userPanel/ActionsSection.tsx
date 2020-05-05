import * as React from 'react';
import styled from 'styled-components';

import GoToBtn from "./GoToBtn"

const Wrapper = styled.div`
    margin-top: 50px;
    height: 100%;
    width: 100%;
`


const ActionsSection: React.SFC = () => {
    return (
        <Wrapper>
            <GoToBtn text="Edytuj profil" src="img/check-board.svg"></GoToBtn>
            <GoToBtn text="Abonament i Faktury" src="img/check-board.svg"></GoToBtn>
            <GoToBtn text="Obejrzane Filmy" src="img/check-board.svg"></GoToBtn>
            <GoToBtn text="Admin panel" src="img/check-board.svg"></GoToBtn>
        </Wrapper>);
}

export default ActionsSection;