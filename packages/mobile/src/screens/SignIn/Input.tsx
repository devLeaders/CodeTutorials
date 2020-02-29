import React, {PureComponent} from 'react';
import { View, Text } from 'react-native';
import { 
    FormInput, 
    FormValidationMessage, 
    FormLabel
} from 'react-native-elements';
import { Formik } from 'formik';



class Input extends PureComponent {
    state = {};
    render() {
        return (
            <View>
                <Text>I am label</Text>
            </View>
        )
    }
}

export default Input;