import React from 'react';
import SingleColumn from '../../layouts/SingleColumn';
import LoginForm from '.';

export default {
    title: 'LoginForm',
    component: LoginForm,
    parameters: {
        componentSubtitle: 'Authenticates users',
        notes: 'Display form'
    }
};

// Use the text knob to define a text input for updating the alert message within Storybook
// Use the select knob to define a select box for changing the alert type within Storybook
export const alert = () => (
    <SingleColumn colClass="col-sm-12 col-md-8 col-lg-5 col-xl-4 col">
        <LoginForm
            onSubmit={async () => 'Login success'}
        />
    </SingleColumn>
);
