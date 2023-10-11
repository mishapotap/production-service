import type { Meta, StoryObj } from '@storybook/react';
import { LoginModal } from './LoginModal';

const meta: Meta<typeof LoginModal> = {
    title: 'features/LoginModal',
    component: LoginModal,
    args: { isOpen: true },
};

export default meta;

type Story = StoryObj<typeof LoginModal>;

export const Primary: Story = {};

export const Dark: Story = {
    parameters: { theme: 'app_dark_theme' },
};
