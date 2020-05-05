import React from 'react';
import styled from 'styled-components';
import TitleForm from '../components/loginComponents/TitleForm';
import EmailField from '../../common/components/form/EmailField';
import PassField from '../../common/components/form/PassField';
import RecoveryPass from '../components/loginComponents/RecoveryPass';
import SubmitButton from '../components/loginComponents/SubmitButton';
import RegisterFields from '../components/loginComponents/RegisterFields';
import {Field, Form, Formik, FormikProps} from 'formik';
import {useHistory} from "react-router-dom"
import NAVIGATION from "../../../config/routing/NavigationPath"
import Axios from "../../../config/axios/configAxios"
import { Device } from '../../common/styles/constans/Device';

const LoginForm = styled.div`
    width: 100%;
    margin-top: 100px;
    padding: 0 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${Device.tablet}) {
        max-width: 600px;
        margin: 100px auto 0 auto;
    }
`;
  
const Login: React.FC = (props: any) => {

const history = useHistory();

    const loginSubmit = async (value: any, action: any) => {

        try{
        const dataResponse = await Axios.post('/auth/signin', {
            "email": `${value.lastName}`,
            "password": `${value.pass}`
            })


            const token = dataResponse.data.token
            localStorage.setItem('token', token)
            Axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 
            history.push(NAVIGATION.MOVIES)
        }
            catch(err) {
                history.push(NAVIGATION.LOGIN)
            }
    }

    return (
        <Formik
            initialValues={{}}
            onSubmit={loginSubmit}
            >{(props: FormikProps<any>) => (
            <Form>
                <LoginForm>  
                    <TitleForm/>
                    <Field name="lastName" placeholder="Doe" component={EmailField}/>
                    <Field name="pass"  component={PassField}/>
                    <SubmitButton></SubmitButton>      
                    <RecoveryPass></RecoveryPass>
                    <RegisterFields></RegisterFields>
                </LoginForm>
            </Form>
        )}
        </Formik>
    )
}

export default Login;