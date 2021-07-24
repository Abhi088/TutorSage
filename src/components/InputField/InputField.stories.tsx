import React from 'react';

import { Meta } from '@storybook/react';

import InputField from './InputField';
import '../../index.css';

export const Input = (args: any) => (
    <InputField className={args.className} touched={args.touched} errorMessage={args.errorMessage} placeholder={args.placeholder} type={args.type}
        name={args.name}></InputField>
);

export default {
    title: 'Components/Input',
    component: InputField,
    args: {
        name: "username",
        type: "string",
        placeholder: "Username",
        touched: false,
        errorMessage: "Username is required"
    }
} as Meta;