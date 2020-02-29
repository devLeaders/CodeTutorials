import React, {PureComponent} from 'react';
import { View, Text } from 'react-native';
import { 
    FormInput, 
    FormValidationMessage, 
    FormLabel,
} from 'react-native-elements';
import { Formik } from 'formik';



class Input extends PureComponent {
    state = {};
    render() {
        return (
            <View>
                <FormLabel>Im a label</FormLabel>
                <FormInput />
                <FormValidationMessage>Error</FormValidationMessage>
            </View>
        );
    }
}

export default Input;