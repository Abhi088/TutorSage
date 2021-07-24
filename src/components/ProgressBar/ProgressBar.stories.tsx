import React from 'react';

import { Meta } from '@storybook/react';

import ProgressBar from './ProgressBar';
import '../../index.css';

export const Progress = (args: any) => (
    <ProgressBar progress={args.progress} progressType={args.progressType}></ProgressBar>
);

export default {
    title: 'Components/Progress',
    component: ProgressBar,
    args: {
        progress: 30,
        progressType: "primary"
    }
} as Meta;