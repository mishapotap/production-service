import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
        theme: ButtonTheme.CLEAR,
    },
};

export const Outlined: Story = {
    args: {
        theme: ButtonTheme.OUTLINED,
    },
};

export const OutlinedSizeL: Story = {
    args: {
        theme: ButtonTheme.OUTLINED,
        size: ButtonSize.L,
    },
};

export const OutlinedSizeXL: Story = {
    args: {
        theme: ButtonTheme.OUTLINED,
        size: ButtonSize.XL,
    },
};

export const OutlinedDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINED,
    },
    parameters: { theme: 'dark' },
};

export const BackgroundTheme: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundThemeDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
    },
    parameters: { theme: 'dark' },
};

export const BackgroundInvertedTheme: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const BackgroundInvertedThemeDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
    parameters: { theme: 'dark' },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        size: ButtonSize.L,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        size: ButtonSize.XL,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};
