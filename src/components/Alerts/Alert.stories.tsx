import React from 'react';

import { Meta } from '@storybook/react';

import Alert from './Alert';
import '../../index.css';

export const Alerts = (args: any) => (
    <Alert type={args.type}>{args.text}</Alert>
);

export default {
    title: 'Components/Alerts',
    component: Alert,
    args: {
        type: "primary",
        text: "Thie is an alert. Click x to close."
    }
} as Meta;