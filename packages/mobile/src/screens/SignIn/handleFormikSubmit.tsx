import * as React from 'react';

const handleFormikSubmit = (values: any, actions: any) {
alert(JSON.stringify(values));
        setTimeout(() => {
            actions.setSubmitting(false);
        }, 1000);
    };
export default handleFormikSubmit;

