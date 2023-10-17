import type { Meta, StoryObj } from '@storybook/react';
import { LoginModal } from './LoginModal';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LoginModal> = {
    title: 'features/LoginModal',
    component: LoginModal,
    args: { isOpen: true },
    decorators: [StoreDecorator],
    parameters: { state: { loginForm: { username: 'admin', password: '123456' } } },
};

export default meta;

type Story = StoryObj<typeof LoginModal>;

export const Primary: Story = {};

export const Error: Story = {
    parameters: { state: { loginForm: { error: 'Error' } } },
};

export const Loading: Story = {
    parameters: { state: { loginForm: { isLoading: true } } },
};

export const Dark: Story = {
    parameters: { theme: 'app_dark_theme' },
};
