import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    args: { title: 'Title', text: 'text text text' },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Light: Story = {};

export const OnlyTitle: Story = {
    args: {
        text: undefined,
    },
};
export const OnlyText: Story = {
    args: {
        title: undefined,
    },
};

export const Dark: Story = {
    parameters: { theme: 'app_dark_theme' },
};

export const Error: Story = {
    args: {
        theme: TextTheme.ERROR,
    },
};
