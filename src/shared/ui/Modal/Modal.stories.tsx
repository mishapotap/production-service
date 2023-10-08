import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    args: {
        isOpen: true,
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque natus non provident repellendus sit. Adipisci\n' +
            '                beatae corporis explicabo facere fugit illum nemo quos vel, velit.',
    },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Light: Story = {};

export const Dark: Story = {
    parameters: { theme: 'app_dark_theme' },
};
