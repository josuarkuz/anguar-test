import type { Meta, StoryObj } from '@storybook/angular';
import { ModalDialog } from './modal-dialog';

const meta: Meta<ModalDialog> = {
  title: 'Components/Modal Dialog',
  component: ModalDialog,
  tags: ['autodocs'],
  args: {
    open: true,
    title: 'Delete item',
    description: 'This action cannot be undone. Please confirm if you want to continue.',
    closeOnBackdropClick: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-modal-dialog
        [open]="open"
        [title]="title"
        [description]="description"
        [closeOnBackdropClick]="closeOnBackdropClick"
      >
        <p>
          The modal content area can contain form fields, warnings, or any other
          important information that should be read before the user acts.
        </p>
      </app-modal-dialog>
    `,
  }),
};

export default meta;

type Story = StoryObj<ModalDialog>;

export const Default: Story = {};

export const WithoutDescription: Story = {
  args: {
    description: undefined,
  },
};
