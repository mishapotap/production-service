import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Light: Story = {};

export const Dark: Story = {
    parameters: { theme: 'app_dark_theme' },
};
