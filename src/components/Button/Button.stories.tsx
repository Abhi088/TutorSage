import React from 'react';

import { Meta } from '@storybook/react';

import Button from './Button';
import '../../index.css';

export const Buttons = (args: any) => (
    <Button buttonDisabled={args.buttonDisabled} text={args.text} buttonSize={args.buttonSize} buttonType={args.buttonType} buttonStyle={args.buttonStyle} className={args.className}></Button>
);

export default {
    title: 'Components/Buttons',
    component: Button,
    args: {
        buttonDisabled: false,
        text: "Click Me!",
        buttonSize: "small",
        buttonType: "primary",
        buttonStyle: "outline",
        className: ""
    }
} as Meta;