import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
};

export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {};

export const Dark: Story = {
    parameters: { theme: 'app_dark_theme' },
};
