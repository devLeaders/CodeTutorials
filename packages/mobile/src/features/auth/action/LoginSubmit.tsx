import * as React from 'react';
import { Alert } from 'react-native'

const handleFormikSubmit = (values: any, actions: any) =>{
    Alert.alert(JSON.stringify(values));
        setTimeout(() => {
            actions.setSubmitting(false);
        }, 1000);
    };
export default handleFormikSubmit;

