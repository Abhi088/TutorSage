import React from 'react';

import { Meta } from '@storybook/react';

import Icon from './Icons';
import '../../index.css';

const names = ["username", "password", "email",]

export const Icons = (args: any) => (
    <Icon {...args}></Icon>
);

export default {
    title: 'Components/Icons',
    component: Icon,
    argTypes: {
        name: {
            options: names,
            control: {
                type: "radio"
            }
        }
    },
    args: {
        name: "username",
        className: ""
    }
} as Meta;