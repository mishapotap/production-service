import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: { to: '/', children: 'Text' },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
};

export const Red: Story = {
    args: {
        theme: AppLinkTheme.RED,
    },
};

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
    parameters: { theme: 'dark' },
};

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
    parameters: { theme: 'dark' },
};

export const RedDark: Story = {
    args: {
        theme: AppLinkTheme.RED,
    },
    parameters: { theme: 'dark' },
};
