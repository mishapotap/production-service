import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    args: { children: 'Text' },
    // parameters: {
    //     layout: 'centered',
    // },
    // tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
    },
};

export const Outlined: Story = {
    args: {
        theme: ThemeButton.OUTLINED,
    },
};

export const OutlinedDark: Story = {
    args: {
        theme: ThemeButton.OUTLINED,
    },
    parameters: { theme: 'dark' },
};
