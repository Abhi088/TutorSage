import React from 'react';

import { Meta } from '@storybook/react';

import StackedAvatars from './StackedAvatars';
import '../../index.css';

export const StackedAvatar = (args: any) => (
    <StackedAvatars {...args}></StackedAvatars>
);

export default {
    title: 'Components/Stacked Avatar',
    component: StackedAvatars,
    args: {
        avatarsSrc: [
            "https://designreset.com/cork/ltr/demo4/assets/img/profile-1.jpeg",
            "https://designreset.com/cork/ltr/demo4/assets/img/profile-2.jpeg",
            "https://designreset.com/cork/ltr/demo4/assets/img/profile-3.jpeg",
            "https://designreset.com/cork/ltr/demo4/assets/img/profile-4.jpeg",
            "https://designreset.com/cork/ltr/demo4/assets/img/profile-5.jpeg"
        ],
        size: "medium"
    }
} as Meta;