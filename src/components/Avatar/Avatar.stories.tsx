import React from 'react';

import { Meta } from '@storybook/react';

import Avatar from './Avatar';
import '../../index.css';

export const Avatars = (args: any) => (
    <Avatar {...args}></Avatar>
);

export default {
    title: 'Components/Avatars',
    component: Avatar,
    args: {
        avatarSize: "small",
        imgSrc: "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
        shape: "square",
        showStatus: true,
        onlineStatus: true,
        imgClass: "",
        className: "",
        name: "Abhi"
    }
} as Meta;