import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    args: { value: 'Input value', placeholder: 'Username' },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {};

export const Dark: Story = {
    parameters: { theme: 'app_dark_theme' },
};
