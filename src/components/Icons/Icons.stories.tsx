import React from 'react';

import { Meta } from '@storybook/react';

import Icon from './Icons';
import '../../index.css';

let names = ["username", "password", "email"]

let icon: React.ReactElement[] = []
for (let i = 0; i < names.length; i++) {
    icon.push(<div className="flex flex-col space-y-2 items-center">
        <Icon name={names[i]}></Icon>
        <span className="text-xs">{names[i]}</span>
    </div>);
}

export const Icons = (args: any) => (
    <div className="flex flex-col space-y-10">
        <Icon name={args.name} className={`${args.className}`}></Icon>
        <div className="grid grid-cols-6 gap-4">
            {icon}
        </div>
    </div>
);

export default {
    title: 'Components/Icons',
    component: Icon,
    args: {
        name: "username",
        className: ""
    }
} as Meta;