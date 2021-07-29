import React from 'react';

import { Meta } from '@storybook/react';

import Alert from './Alert';
import '../../index.css';

export const Alerts = (args: any) => (
    <Alert {...args}>{args.text}</Alert>
);

export default {
    title: 'Components/Alerts',
    component: Alert,
    args: {
        theme: "primary",
        text: "This is an alert. Click x to close.",
        customAlertClass: "",
        customButtonClass: ""
    }
} as Meta;