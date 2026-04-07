import type { Meta, StoryObj } from '@storybook/angular';
import { ToastAlert } from './toast-alert';

const meta: Meta<ToastAlert> = {
  title: 'Components/Toast Alert',
  component: ToastAlert,
  tags: ['autodocs'],
  render: () => ({
    imports: [ToastAlert],
    template: `
      <div style="max-width: 800px;">
        <app-toast-alert></app-toast-alert>
      </div>
    `,
  }),
};

export default meta;

type Story = StoryObj<ToastAlert>;

export const Default: Story = {};
