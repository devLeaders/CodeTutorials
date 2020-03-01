import React from 'react';
import styled from 'styled-components';
import TitleForm from '../components/LoginComponents/TitleForm';
import EmailField from '../components/LoginComponents/EmailField';
import PassField from '../components/LoginComponents/PassField';
import RecoveryPass from '../components/LoginComponents/RecoveryPass';
import SubmitButton from '../components/LoginComponents/SubmitButton';
import RegisterFields from '../components/LoginComponents/RegisterFields';
import { breakPoint } from '../utils/breakPoint'

const LoginForm = styled.div`
    width: 100%;
    margin-top: 100px;
    padding: 0 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${breakPoint.tablet}) {
        max-width: 600px;
        margin: 100px auto 0 auto;
    }
`;

const Login: React.FC = (props: any) => {

    return (
        <LoginForm>
            <TitleForm></TitleForm>
            <EmailField></EmailField>
            <PassField></PassField>
            <RecoveryPass></RecoveryPass>
            <SubmitButton></SubmitButton>
            <RegisterFields></RegisterFields>
        </LoginForm>
    )
}

export default Login;