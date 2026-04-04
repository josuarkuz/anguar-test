import type { Meta, StoryObj } from '@storybook/angular';
import { ModalDialog } from './modal-dialog';

const meta: Meta<ModalDialog> = {
  title: 'Components/Modal Dialog',
  component: ModalDialog,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ModalDialog>;

export const Default: Story = {
  render: () => ({
    imports: [ModalDialog],
    template: `
      <app-modal-dialog
        [open]="true"
        [title]="'Delete item'"
        [description]="'This action cannot be undone. Please confirm if you want to continue.'"
        [closeOnBackdropClick]="true"
      >
        <p>
          The modal content area can contain form fields, warnings, or any other
          important information that should be read before the user acts.
        </p>
      </app-modal-dialog>
    `,
  }),
};
