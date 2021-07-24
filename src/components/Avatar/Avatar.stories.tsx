import React from 'react';

import { Meta } from '@storybook/react';

import Avatar from './Avatar';
import '../../index.css';

export const Avatars = (args: any) => (
    <Avatar avatarSize={args.avatarSize} imgSrc={args.imgSrc} onlineStatus={args.onlineStatus} shape={args.shape}></Avatar>
);

export default {
    title: 'Components/Avatars',
    component: Avatar,
    args: {
        avatarSize: "small",
        imgSrc: "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
        onlineStatus: true,
        shape: "square"
    }
} as Meta;