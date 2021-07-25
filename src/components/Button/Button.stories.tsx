import React from 'react';

import { Meta } from '@storybook/react';

import Button from './Button';
import '../../index.css';

export const Buttons = (args: any) => (
    <Button {...args}></Button>
);

export default {
    title: 'Components/Buttons',
    component: Button,
    args: {
        buttonDisabled: false,
        text: "Click Me!",
        buttonSize: "small",
        buttonType: "primary",
        buttonStyle: "solid",
        className: ""
    }
} as Meta;