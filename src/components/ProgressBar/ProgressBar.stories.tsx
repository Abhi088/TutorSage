import React from 'react';

import { Meta } from '@storybook/react';

import ProgressBar from './ProgressBar';
import '../../index.css';

export const ProgressBars = (args: any) => (
    <ProgressBar {...args}></ProgressBar>
);

export default {
    title: 'Components/Progress Bars',
    component: ProgressBar,
    args: {
        progress: 30,
        theme: "primary",
        customThemeClass: ""
    }
} as Meta;