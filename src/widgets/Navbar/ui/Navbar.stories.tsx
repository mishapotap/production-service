import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    decorators: [StoreDecorator],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {};

export const AuthLight: Story = {
    parameters: { state: { user: { authData: { id: 1, username: 'admin' } } } },
};

export const Dark: Story = {
    parameters: { theme: 'app_dark_theme' },
};

export const AuthDark: Story = {
    parameters: { theme: 'app_dark_theme', state: { user: { authData: { id: 1, username: 'admin' } } } },
};
